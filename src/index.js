export default (data) => {
  // check for native implementation
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(obj) === '[object Array]';
  } else {
    return Array.isArray(data);
  }
};
