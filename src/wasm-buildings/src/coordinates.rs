#[derive(Debug)]
pub struct Coordinate {
    pub x: f64,
    pub y: f64,
}

#[derive(Debug, PartialEq)]
pub struct Coordinate3D {
    pub x: f64,
    pub y: f64,
    pub z: f64,
}

#[derive(Debug)]
struct Polygon {
    width: f64,
    height: f64,
}

#[derive(Debug)]
struct Polygon3D {
    polygon: Polygon,
    depth: f64,
}

#[derive(Debug)]
struct PicturePlane {
    vanishing_point: Coordinate,
    observer_distance_from_picture_plane: f64,
}

#[derive(Debug, PartialEq)]
pub enum CoordinateRelationX {
    Left,
    Right,
    Same,
}

#[derive(Debug, PartialEq)]
pub enum CoordinateRelationY {
    Above,
    Below,
    Same,
}

pub fn convert_3d_coordinate_to_picture_plane(
    vanishing_point: Coordinate,
    observer_distance_from_picture_plane: f64,
    coordinate: Coordinate3D,
) -> Coordinate {
    let multiplier = observer_distance_from_picture_plane
        / (coordinate.z + observer_distance_from_picture_plane);
    Coordinate {
        x: vanishing_point.x + (coordinate.x - vanishing_point.x) * multiplier,
        y: vanishing_point.y + (coordinate.y - vanishing_point.y) * multiplier,
    }
}

pub fn c2x_is(c1: &Coordinate, c2: &Coordinate) -> CoordinateRelationX {
    if c2.x > c1.x {
        CoordinateRelationX::Right
    } else if c2.x == c1.x {
        CoordinateRelationX::Same
    } else {
        CoordinateRelationX::Left
    }
}

pub fn c2y_is(c1: &Coordinate, c2: &Coordinate) -> CoordinateRelationY {
    if c2.y > c1.y {
        CoordinateRelationY::Below
    } else if c2.y == c1.y {
        CoordinateRelationY::Same
    } else {
        CoordinateRelationY::Above
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_heading_drawing() {
        let c1 = Coordinate { x: 0.0, y: 0.0 };
        let c2 = Coordinate { x: 100.0, y: 100.0 };

        assert_eq!(c2x_is(&c1, &c2), CoordinateRelationX::Right);
        // In html canvas, larger Y means the point is lower
        assert_eq!(c2y_is(&c1, &c2), CoordinateRelationY::Below);
        assert_eq!(c2x_is(&c2, &c1), CoordinateRelationX::Left);
        assert_eq!(c2y_is(&c2, &c1), CoordinateRelationY::Above);
    }
}
