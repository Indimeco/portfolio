let wasm;
export function __wbg_set_wasm(val) {
	wasm = val;
}

const lTextDecoder =
	typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = null;

function getUint8Memory0() {
	if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
		cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
	}
	return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
	ptr = ptr >>> 0;
	return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) {
	return heap[idx];
}

let heap_next = heap.length;

function dropObject(idx) {
	if (idx < 132) return;
	heap[idx] = heap_next;
	heap_next = idx;
}

function takeObject(idx) {
	const ret = getObject(idx);
	dropObject(idx);
	return ret;
}

function addHeapObject(obj) {
	if (heap_next === heap.length) heap.push(heap.length + 1);
	const idx = heap_next;
	heap_next = heap[idx];

	heap[idx] = obj;
	return idx;
}
/**
 */
export function greet() {
	wasm.greet();
}

/**
 * @param {any} context
 * @returns {any}
 */
export function rustDrawBuildings(context) {
	const ret = wasm.rustDrawBuildings(addHeapObject(context));
	return takeObject(ret);
}

export function __wbg_alert_a7259bff74b6ca8e(arg0, arg1) {
	alert(getStringFromWasm0(arg0, arg1));
}

export function __wbg_drawBuildings_2564fbb7034dac8a(arg0) {
	const ret = drawBuildings(takeObject(arg0));
	return addHeapObject(ret);
}
