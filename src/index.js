import { type } from "./type.js";

export function deepClone(source) {
  const t = type(source);
  if (t !== "object" && t !== "array") {
    return source;
  }
  let target;
  if (t === "object") {
    target = {};
    for (let i in source) {
      if (source.hasOwnProperty(i)) {
        target[i] = deepClone(source[i]);
      }
    }
  } else {
    target = [];
    for (let i = 0; i < source.length; ++i) {
      target[i] = deepClone(source[i]);
    }
  }
  return target;
}
