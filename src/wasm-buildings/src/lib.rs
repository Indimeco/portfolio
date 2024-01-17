mod coordinates;
mod polygons;
mod rectangular_prisms;
mod utils;

use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    // Use `js_namespace` here to bind `console.log(..)` instead of just
    // `log(..)`
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    // The `console.log` is quite polymorphic, so we can bind it with multiple
    // signatures. Note that we need to use `js_name` to ensure we always call
    // `log` in JS.
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_f64(a: f64);

    // Multiple arguments too!
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_many(a: &str, b: &str);
}

// the bindgen docs are by far the best docs on wasm https://rustwasm.github.io/docs/wasm-bindgen/reference/working-with-duck-typed-interfaces.html

#[wasm_bindgen]
pub fn rust_draw_rectangular_prism(
    picture_plane_raw: JsValue,
    polygon_raw: JsValue,
    origin_raw: JsValue,
    face_colors_raw: JsValue,
) -> () {
    log("Begin parsing");
    let picture_plane: rectangular_prisms::PicturePlane =
        serde_wasm_bindgen::from_value(picture_plane_raw).expect("Picture plane failed to parse");
    let polygon: rectangular_prisms::Polygon3D =
        serde_wasm_bindgen::from_value(polygon_raw).expect("Polygon failed to parse");
    let origin: coordinates::Coordinate3D =
        serde_wasm_bindgen::from_value(origin_raw).expect("Origin failed to parse");
    let face_colors: rectangular_prisms::FaceColors =
        serde_wasm_bindgen::from_value(face_colors_raw).expect("Face colors failed to parse");

    let document = web_sys::window().unwrap().document().unwrap();
    let canvas = document
        .get_element_by_id("canvas")
        .expect("Failed to find canvas");
    let canvas: web_sys::HtmlCanvasElement = canvas
        .dyn_into::<web_sys::HtmlCanvasElement>()
        .map_err(|_| ())
        .unwrap();

    let context = canvas
        .get_context("2d")
        .unwrap()
        .unwrap()
        .dyn_into::<web_sys::CanvasRenderingContext2d>()
        .unwrap();

    rectangular_prisms::draw_rectangular_prism(
        &context,
        picture_plane,
        polygon,
        origin,
        face_colors,
    );
}
