import { createUint8Reader } from './utilities/byte-reader.js';
import { createCarReader } from './utilities/sync-car-reader.js';

export const fromUint8Array = (buffer: Uint8Array) => {
	const reader = createUint8Reader(buffer);
	return createCarReader(reader);
};
