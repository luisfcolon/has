"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * has() returns a boolean
 * based on if an object has a key
 */
function has(obj) {
  if (obj === undefined) {
    return false;
  }

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var keys = Array.prototype.slice.apply(args);
  var length = keys.length;
  var object = obj;

  for (var i = 0; i < length; i++) {
    if (!object || !hasOwnProperty.call(object, keys[i])) {
      return false;
    }

    object = object[keys[i]];
  }

  return true;
}

exports.default = has;
