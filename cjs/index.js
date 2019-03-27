"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(data) {
  // check for built-in implementation
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(data) === '[object Array]';
  } else {
    return Array.isArray(data);
  }
};

exports.default = _default;