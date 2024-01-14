use std::convert::TryInto;
use std::f64::consts::PI;
use wasm_bindgen::prelude::*;
use web_sys::CanvasRenderingContext2d;

use crate::coordinates;
use crate::coordinates::Coordinate3D;
use crate::polygons;

#[derive(Debug)]
struct Polygon3D {
    width: f64,
    height: f64,
    depth: f64,
}

struct FaceColors {
    light: String,
    dark: String,
    neutral: String,
}

#[derive(Debug)]
struct PicturePlane {
    vanishing_point: coordinates::Coordinate,
    observer_distance_from_picture_plane: f64,
}

fn positive_or_zero(num: &f64) -> f64 {
    if *num > 0.0 {
        num.clone()
    } else {
        0.0
    }
}

fn get_rectangular_plane(
    origin: &coordinates::Coordinate3D,
    width: &f64,
    height: &f64,
) -> [coordinates::Coordinate3D; 4] {
    let destination = coordinates::Coordinate3D {
        x: origin.x + positive_or_zero(width),
        y: origin.y - positive_or_zero(height),
        z: origin.z,
    };

    [
        coordinates::Coordinate3D {
            x: origin.x,
            y: origin.y,
            z: origin.z,
        },
        coordinates::Coordinate3D {
            x: destination.x,
            y: origin.y,
            z: origin.z,
        },
        coordinates::Coordinate3D {
            x: destination.x,
            y: destination.y,
            z: origin.z,
        },
        coordinates::Coordinate3D {
            x: origin.x,
            y: destination.y,
            z: origin.z,
        },
    ]
}

fn draw_rectangular_plane(
    ctx: &CanvasRenderingContext2d,
    coordinates: &[&coordinates::Coordinate],
    color: &str,
) {
    polygons::trace_polygon(ctx, coordinates);
    ctx.set_fill_style(&JsValue::from_str(color));
    ctx.fill();
}

fn is_face_on_canvas(ctx: &CanvasRenderingContext2d, face: &[coordinates::Coordinate; 4]) -> bool {
    face.iter()
        .any(|c| c.x >= 0.0 && c.x <= ctx.canvas().unwrap().width() as f64)
}

fn convert_3d_coordinate_to_picture_plane(
    vanishing_point: &coordinates::Coordinate,
    observer_distance_from_picture_plane: &f64,
    coordinate: &coordinates::Coordinate3D,
) -> coordinates::Coordinate {
    let multiplier = observer_distance_from_picture_plane
        / (coordinate.z + observer_distance_from_picture_plane);
    coordinates::Coordinate {
        x: vanishing_point.x + (coordinate.x - vanishing_point.x) * multiplier,
        y: vanishing_point.y + (coordinate.y - vanishing_point.y) * multiplier,
    }
}

fn draw_rectangular_prism(
    ctx: &web_sys::CanvasRenderingContext2d,
    picture_plane: PicturePlane,
    polygon_3d: Polygon3D,
    origin: coordinates::Coordinate3D,
    face_colors: FaceColors,
) {
    let vanishing_point = picture_plane.vanishing_point;
    let observer_distance_from_picture_plane = picture_plane.observer_distance_from_picture_plane;

    // draw front face
    let p1: [coordinates::Coordinate; 4] =
        get_rectangular_plane(&origin, &polygon_3d.width, &polygon_3d.height)
            .iter()
            .map(|o| {
                convert_3d_coordinate_to_picture_plane(
                    &vanishing_point,
                    &observer_distance_from_picture_plane,
                    &o,
                )
            })
            .collect::<Vec<_>>()
            .try_into()
            .expect("Expected a Vec with exactly 4 elements");

    // get back face coordinates
    let p2: [coordinates::Coordinate; 4] = get_rectangular_plane(
        &coordinates::Coordinate3D {
            z: origin.z + polygon_3d.depth,
            ..origin
        },
        &polygon_3d.width,
        &polygon_3d.height,
    )
    .iter()
    .map(|o| {
        convert_3d_coordinate_to_picture_plane(
            &vanishing_point,
            &observer_distance_from_picture_plane,
            &o,
        )
    })
    .collect::<Vec<_>>()
    .try_into()
    .expect("Expected a Vec with exactly 4 elements");

    // if the front or back face isn't on the canvas then we dump the shape for perf
    if !is_face_on_canvas(ctx, &p1) && !is_face_on_canvas(ctx, &p2) {
        return;
    }

    draw_rectangular_plane(ctx, &[&p1[0], &p1[1], &p1[2], &p1[3]], &face_colors.neutral);

    let [p1_top_left, p1_top_right, p1_bottom_right, p1_bottom_left] = &p1;
    let [p2_top_left, p2_top_right, p2_bottom_right, p2_bottom_left] = &p2;

    // draw bottom face
    if coordinates::c2y_is(&p1_top_left, &vanishing_point)
        == coordinates::CoordinateRelationY::Below
    {
        draw_rectangular_plane(
            ctx,
            &[p1_top_right, p2_top_right, p2_top_left, p1_top_left],
            &face_colors.dark,
        );
    }
    // draw top face
    if coordinates::c2y_is(&p1_bottom_left, &vanishing_point)
        == coordinates::CoordinateRelationY::Above
    {
        draw_rectangular_plane(
            ctx,
            &[
                p1_bottom_left,
                p1_bottom_right,
                p2_bottom_right,
                p2_bottom_left,
            ],
            &face_colors.light,
        );
    }
    // draw left face
    if coordinates::c2x_is(&p1_bottom_left, &vanishing_point)
        == coordinates::CoordinateRelationX::Left
    {
        draw_rectangular_plane(
            ctx,
            &[p1_top_left, p2_top_left, p2_bottom_left, p1_bottom_left],
            &face_colors.dark,
        );
    }

    // draw right face
    if coordinates::c2x_is(&p1_top_right, &vanishing_point)
        == coordinates::CoordinateRelationX::Right
    {
        draw_rectangular_plane(
            ctx,
            &[p1_top_right, p2_top_right, p2_bottom_right, p1_bottom_right],
            &face_colors.dark,
        );
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_rectangular_prisms() {
        let plane = get_rectangular_plane(
            &coordinates::Coordinate3D {
                x: 2.0,
                y: 0.0,
                z: 10.0,
            },
            &20.0,
            &35.0,
        );

        let expected = [
            Coordinate3D {
                x: 2.0,
                y: 0.0,
                z: 10.0,
            },
            Coordinate3D {
                x: 22.0,
                y: 0.0,
                z: 10.0,
            },
            Coordinate3D {
                x: 22.0,
                y: -35.0,
                z: 10.0,
            },
            Coordinate3D {
                x: 2.0,
                y: -35.0,
                z: 10.0,
            },
        ];

        for (actual, expected) in plane.iter().zip(expected.iter()) {
            assert_eq!(actual, expected);
        }
    }
}
