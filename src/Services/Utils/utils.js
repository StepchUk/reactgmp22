/**
 * Group of functions for transforming object or array of objects which keys have snake case,
 * to camel case keys
 *
 * Alternative function for transrom
 * const transformToCamelCase = (input) => Object.entries(input)
 * .reduce((acc, current) => {
 *   const [key, value] = current;
 *   acc[fn(key)] = value;
 *   return acc;
 * }, {});
 */

const camelFn = (key) => key.replace(/_([a-z])/g, (_, m) => m.toUpperCase());
const snakeFn = (str) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
const trasnform = (o, fn) => Object.fromEntries(
  Object.entries(o).map(([k, v]) => [fn(k), v]),
);

export const toCamelCase = (arrayOfObjects) => arrayOfObjects.map((o) => trasnform(o, camelFn));
export const toSnakeCase = (o) => trasnform(o, snakeFn);

export const getYear = (date) => date.split('-')[0];
