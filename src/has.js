/**
 * has() returns a boolean
 * based on if an object has a key
 */
function has(obj, ...args) {
  if (obj === undefined) {
    return false;
  }

  const keys = Array.prototype.slice.apply(args);
  const length = keys.length;
  let object = obj;

  for (let i = 0; i < length; i++) {
    if (!object || !hasOwnProperty.call(object, keys[i])) {
      return false;
    }

    object = object[keys[i]];
  }

  return true;
}

export default has;
