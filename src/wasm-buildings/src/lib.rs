mod coordinates;
mod polygons;
mod rectangular_prisms;
mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    pub type DrawingContext;
    fn alert(s: &str);
    fn drawBuildings(context: DrawingContext) -> DrawingContext;
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, wasm-buildings!");
}

// struct BuildingDimension {
//     width: i32,
//     height: i32,
//     depth: i32,
// }

// struct BuildingPosition {
//     x: i32,
//     y: i32,
// }
// struct ColouredBuilding {
// 	dimensions: BuildingDimension;
// 	position: BuildingPosition;
// }

// struct Coordinate { x: i32; y: i32 }
// struct Polygon = {
//     width: i32,
//     height: i32,
// }
// struct PicturePlane {
//     vanishingPoint: Coordinate,
//     observerDistanceFromPicturePlane: i32,
// }
// enum CoordinateRelationX { left, right, same }
// enum CoordinateRelationY { above, below, same }

// struct DrawingContext {
//     canvas: HTMLCanvasElement;
// 	ctx: CanvasRenderingContext2D;
// 	vanishingPoint: Coordinate;
// 	drawVars: DrawVars;
// }

// finding it hard to test this atm
// maybe need to replace the whole 'composition' function and not pass any context/canvas/etc between rust/js
// the bindgen docs are by far the best docs on wasm https://rustwasm.github.io/docs/wasm-bindgen/reference/working-with-duck-typed-interfaces.html
// there is stuff here about using canvas, and how conversions between rust types / js types happen
// if we port the whole drawing/composition func to this though, then we'll also need to port all the building generation code.
#[wasm_bindgen]
pub fn rustDrawBuildings(context: DrawingContext) -> DrawingContext {
    alert("rust draw buildings");
    return drawBuildings(context);
}
