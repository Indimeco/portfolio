#!/bin/bash

cd src/wasm-buildings
cargo build --target wasm32-unknown-unknown --release
wasm-bindgen target/wasm32-unknown-unknown/release/wasm_buildings.wasm --out-dir generated_js
cd ..