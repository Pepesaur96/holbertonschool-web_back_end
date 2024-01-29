// A function named createInt8TypedArray that returns
// a new ArrayBuffer with an Int8 value at a specific position.

export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  view[position] = value;
  return buffer;
}
