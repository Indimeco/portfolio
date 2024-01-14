use wasm_bindgen::prelude::*;

use crate::coordinates;

fn get_canvas_position<T>(canvas: &T) -> f64
where
    T: JsCast,
{
    // Check if the canvas can be cast to HtmlElement
    if let Some(html_element) = canvas.dyn_ref::<web_sys::HtmlElement>() {
        // Use HtmlElement-specific methods
        return html_element.offset_top() as f64;
    }

    // Handle other types of Elements or fallback
    0.0
}

pub fn trace_polygon(
    ctx: &web_sys::CanvasRenderingContext2d,
    coords: &[&coordinates::Coordinate],
) -> () {
    if coords.is_empty() {
        return;
    }

    let canvas_offset_top = get_canvas_position(&ctx.canvas().unwrap());

    let first_coord = &coords[0];

    ctx.begin_path();
    ctx.move_to(first_coord.x, first_coord.y - canvas_offset_top);

    for coord in coords.iter() {
        let x = coord.x;
        let y = coord.y - canvas_offset_top;
        ctx.line_to(x, y);
    }

    ctx.close_path();
}
