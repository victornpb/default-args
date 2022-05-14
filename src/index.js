/**
 * Returns the options object deeply merged with the defaults.
 * Extranous properties are not included in the returned object.
 * @param {object} defaults - The object that contains the default values.
 * @param {object|undefined|null} [options] - The object to be merged into defaultObj. (it does not mutate this argument)
 * @returns {object} the merged object.
 *
 * @example
 * function myFunction(options) {
 *   options = defaults({
 *     foo: true,
 *     bar: {
 *       a: 1,
 *       b: 2,
 *     },
 *   }, options);
 *
 *   // do stuff with options
 * }
 */
export default function defaultArgs(defaults, options) {
  function isObj(x) { return x !== null && typeof x === 'object'; }
  function hasOwn(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }

  if (isObj(options)) for (let prop in defaults) {
    if (hasOwn(defaults, prop) && hasOwn(options, prop)) {
      if (isObj(defaults[prop])) defaultArgs(defaults[prop], options[prop]);
      else defaults[prop] = options[prop];
    }
  }
  return defaults;
}
