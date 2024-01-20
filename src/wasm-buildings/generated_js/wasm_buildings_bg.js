let wasm;
export function __wbg_set_wasm(val) {
	wasm = val;
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

function isLikeNone(x) {
	return x === undefined || x === null;
}

let cachedFloat64Memory0 = null;

function getFloat64Memory0() {
	if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
		cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
	}
	return cachedFloat64Memory0;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
	if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
		cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
	}
	return cachedInt32Memory0;
}

let WASM_VECTOR_LEN = 0;

let cachedUint8Memory0 = null;

function getUint8Memory0() {
	if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
		cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
	}
	return cachedUint8Memory0;
}

const lTextEncoder =
	typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString =
	typeof cachedTextEncoder.encodeInto === 'function'
		? function (arg, view) {
				return cachedTextEncoder.encodeInto(arg, view);
		  }
		: function (arg, view) {
				const buf = cachedTextEncoder.encode(arg);
				view.set(buf);
				return {
					read: arg.length,
					written: buf.length,
				};
		  };

function passStringToWasm0(arg, malloc, realloc) {
	if (realloc === undefined) {
		const buf = cachedTextEncoder.encode(arg);
		const ptr = malloc(buf.length, 1) >>> 0;
		getUint8Memory0()
			.subarray(ptr, ptr + buf.length)
			.set(buf);
		WASM_VECTOR_LEN = buf.length;
		return ptr;
	}

	let len = arg.length;
	let ptr = malloc(len, 1) >>> 0;

	const mem = getUint8Memory0();

	let offset = 0;

	for (; offset < len; offset++) {
		const code = arg.charCodeAt(offset);
		if (code > 0x7f) break;
		mem[ptr + offset] = code;
	}

	if (offset !== len) {
		if (offset !== 0) {
			arg = arg.slice(offset);
		}
		ptr = realloc(ptr, len, (len = offset + arg.length * 3), 1) >>> 0;
		const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
		const ret = encodeString(arg, view);

		offset += ret.written;
	}

	WASM_VECTOR_LEN = offset;
	return ptr;
}

const lTextDecoder =
	typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

function getStringFromWasm0(ptr, len) {
	ptr = ptr >>> 0;
	return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
	if (heap_next === heap.length) heap.push(heap.length + 1);
	const idx = heap_next;
	heap_next = heap[idx];

	heap[idx] = obj;
	return idx;
}

function debugString(val) {
	// primitive types
	const type = typeof val;
	if (type == 'number' || type == 'boolean' || val == null) {
		return `${val}`;
	}
	if (type == 'string') {
		return `"${val}"`;
	}
	if (type == 'symbol') {
		const description = val.description;
		if (description == null) {
			return 'Symbol';
		} else {
			return `Symbol(${description})`;
		}
	}
	if (type == 'function') {
		const name = val.name;
		if (typeof name == 'string' && name.length > 0) {
			return `Function(${name})`;
		} else {
			return 'Function';
		}
	}
	// objects
	if (Array.isArray(val)) {
		const length = val.length;
		let debug = '[';
		if (length > 0) {
			debug += debugString(val[0]);
		}
		for (let i = 1; i < length; i++) {
			debug += ', ' + debugString(val[i]);
		}
		debug += ']';
		return debug;
	}
	// Test for built-in
	const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
	let className;
	if (builtInMatches.length > 1) {
		className = builtInMatches[1];
	} else {
		// Failed to match the standard '[object ClassName]'
		return toString.call(val);
	}
	if (className == 'Object') {
		// we're a user defined class or Object
		// JSON.stringify avoids problems with cycles, and is generally much
		// easier than looping through ownProperties of `val`.
		try {
			return 'Object(' + JSON.stringify(val) + ')';
		} catch (_) {
			return 'Object';
		}
	}
	// errors
	if (val instanceof Error) {
		return `${val.name}: ${val.message}\n${val.stack}`;
	}
	// TODO we could test for more things here, like `Set`s and `Map`s.
	return className;
}
/**
 * @param {any} picture_plane_raw
 * @param {any} polygon_raw
 * @param {any} origin_raw
 * @param {any} face_colors_raw
 */
export function rust_draw_rectangular_prism(picture_plane_raw, polygon_raw, origin_raw, face_colors_raw) {
	wasm.rust_draw_rectangular_prism(
		addHeapObject(picture_plane_raw),
		addHeapObject(polygon_raw),
		addHeapObject(origin_raw),
		addHeapObject(face_colors_raw),
	);
}

function handleError(f, args) {
	try {
		return f.apply(this, args);
	} catch (e) {
		wasm.__wbindgen_exn_store(addHeapObject(e));
	}
}

export function __wbindgen_object_drop_ref(arg0) {
	takeObject(arg0);
}

export function __wbindgen_is_undefined(arg0) {
	const ret = getObject(arg0) === undefined;
	return ret;
}

export function __wbindgen_in(arg0, arg1) {
	const ret = getObject(arg0) in getObject(arg1);
	return ret;
}

export function __wbindgen_number_get(arg0, arg1) {
	const obj = getObject(arg1);
	const ret = typeof obj === 'number' ? obj : undefined;
	getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
	getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
}

export function __wbindgen_string_get(arg0, arg1) {
	const obj = getObject(arg1);
	const ret = typeof obj === 'string' ? obj : undefined;
	var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	var len1 = WASM_VECTOR_LEN;
	getInt32Memory0()[arg0 / 4 + 1] = len1;
	getInt32Memory0()[arg0 / 4 + 0] = ptr1;
}

export function __wbindgen_is_object(arg0) {
	const val = getObject(arg0);
	const ret = typeof val === 'object' && val !== null;
	return ret;
}

export function __wbindgen_string_new(arg0, arg1) {
	const ret = getStringFromWasm0(arg0, arg1);
	return addHeapObject(ret);
}

export function __wbindgen_object_clone_ref(arg0) {
	const ret = getObject(arg0);
	return addHeapObject(ret);
}

export function __wbindgen_jsval_loose_eq(arg0, arg1) {
	const ret = getObject(arg0) == getObject(arg1);
	return ret;
}

export function __wbindgen_boolean_get(arg0) {
	const v = getObject(arg0);
	const ret = typeof v === 'boolean' ? (v ? 1 : 0) : 2;
	return ret;
}

export function __wbindgen_error_new(arg0, arg1) {
	const ret = new Error(getStringFromWasm0(arg0, arg1));
	return addHeapObject(ret);
}

export function __wbg_getwithrefkey_15c62c2b8546208d(arg0, arg1) {
	const ret = getObject(arg0)[getObject(arg1)];
	return addHeapObject(ret);
}

export function __wbg_instanceof_Window_99dc9805eaa2614b(arg0) {
	let result;
	try {
		result = getObject(arg0) instanceof Window;
	} catch (_) {
		result = false;
	}
	const ret = result;
	return ret;
}

export function __wbg_document_5257b70811e953c0(arg0) {
	const ret = getObject(arg0).document;
	return isLikeNone(ret) ? 0 : addHeapObject(ret);
}

export function __wbg_scrollY_00f7f7c415bde24a() {
	return handleError(function (arg0) {
		const ret = getObject(arg0).scrollY;
		return ret;
	}, arguments);
}

export function __wbg_getElementById_00904c7c4a32c23b(arg0, arg1, arg2) {
	const ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));
	return isLikeNone(ret) ? 0 : addHeapObject(ret);
}

export function __wbg_instanceof_HtmlElement_430cfa09315574cc(arg0) {
	let result;
	try {
		result = getObject(arg0) instanceof HTMLElement;
	} catch (_) {
		result = false;
	}
	const ret = result;
	return ret;
}

export function __wbg_offsetTop_f17e37517e25eb43(arg0) {
	const ret = getObject(arg0).offsetTop;
	return ret;
}

export function __wbg_instanceof_HtmlCanvasElement_a6076360513b6876(arg0) {
	let result;
	try {
		result = getObject(arg0) instanceof HTMLCanvasElement;
	} catch (_) {
		result = false;
	}
	const ret = result;
	return ret;
}

export function __wbg_width_9d9d26b087c6ad54(arg0) {
	const ret = getObject(arg0).width;
	return ret;
}

export function __wbg_getContext_39cdfeffd658feb7() {
	return handleError(function (arg0, arg1, arg2) {
		const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));
		return isLikeNone(ret) ? 0 : addHeapObject(ret);
	}, arguments);
}

export function __wbg_instanceof_CanvasRenderingContext2d_17760092d89f8894(arg0) {
	let result;
	try {
		result = getObject(arg0) instanceof CanvasRenderingContext2D;
	} catch (_) {
		result = false;
	}
	const ret = result;
	return ret;
}

export function __wbg_canvas_07fefd7a49309c28(arg0) {
	const ret = getObject(arg0).canvas;
	return isLikeNone(ret) ? 0 : addHeapObject(ret);
}

export function __wbg_setfillStyle_0284526726395e47(arg0, arg1) {
	getObject(arg0).fillStyle = getObject(arg1);
}

export function __wbg_beginPath_317e9c4bf21bdeaa(arg0) {
	getObject(arg0).beginPath();
}

export function __wbg_fill_9a9ff7e4565cec29(arg0) {
	getObject(arg0).fill();
}

export function __wbg_closePath_240300392d2c2074(arg0) {
	getObject(arg0).closePath();
}

export function __wbg_lineTo_3fcfab7d5f3282a0(arg0, arg1, arg2) {
	getObject(arg0).lineTo(arg1, arg2);
}

export function __wbg_moveTo_85c1057e0b74ac9d(arg0, arg1, arg2) {
	getObject(arg0).moveTo(arg1, arg2);
}

export function __wbg_newnoargs_5859b6d41c6fe9f7(arg0, arg1) {
	const ret = new Function(getStringFromWasm0(arg0, arg1));
	return addHeapObject(ret);
}

export function __wbg_call_a79f1973a4f07d5e() {
	return handleError(function (arg0, arg1) {
		const ret = getObject(arg0).call(getObject(arg1));
		return addHeapObject(ret);
	}, arguments);
}

export function __wbg_self_086b5302bcafb962() {
	return handleError(function () {
		const ret = self.self;
		return addHeapObject(ret);
	}, arguments);
}

export function __wbg_window_132fa5d7546f1de5() {
	return handleError(function () {
		const ret = window.window;
		return addHeapObject(ret);
	}, arguments);
}

export function __wbg_globalThis_e5f801a37ad7d07b() {
	return handleError(function () {
		const ret = globalThis.globalThis;
		return addHeapObject(ret);
	}, arguments);
}

export function __wbg_global_f9a61fce4af6b7c1() {
	return handleError(function () {
		const ret = global.global;
		return addHeapObject(ret);
	}, arguments);
}

export function __wbg_instanceof_ArrayBuffer_f4521cec1b99ee35(arg0) {
	let result;
	try {
		result = getObject(arg0) instanceof ArrayBuffer;
	} catch (_) {
		result = false;
	}
	const ret = result;
	return ret;
}

export function __wbg_buffer_5d1b598a01b41a42(arg0) {
	const ret = getObject(arg0).buffer;
	return addHeapObject(ret);
}

export function __wbg_new_ace717933ad7117f(arg0) {
	const ret = new Uint8Array(getObject(arg0));
	return addHeapObject(ret);
}

export function __wbg_set_74906aa30864df5a(arg0, arg1, arg2) {
	getObject(arg0).set(getObject(arg1), arg2 >>> 0);
}

export function __wbg_length_f0764416ba5bb237(arg0) {
	const ret = getObject(arg0).length;
	return ret;
}

export function __wbg_instanceof_Uint8Array_4f5cffed7df34b2f(arg0) {
	let result;
	try {
		result = getObject(arg0) instanceof Uint8Array;
	} catch (_) {
		result = false;
	}
	const ret = result;
	return ret;
}

export function __wbindgen_debug_string(arg0, arg1) {
	const ret = debugString(getObject(arg1));
	const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	const len1 = WASM_VECTOR_LEN;
	getInt32Memory0()[arg0 / 4 + 1] = len1;
	getInt32Memory0()[arg0 / 4 + 0] = ptr1;
}

export function __wbindgen_throw(arg0, arg1) {
	throw new Error(getStringFromWasm0(arg0, arg1));
}

export function __wbindgen_memory() {
	const ret = wasm.memory;
	return addHeapObject(ret);
}
