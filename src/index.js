export default (data) => {
  // check for built-in implementation
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(data) === '[object Array]';
  } else {
    return Array.isArray(data);
  }
};
