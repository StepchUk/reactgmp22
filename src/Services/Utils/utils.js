/**
 * Group of functions for transforming object or array of objects which keys have snake case,
 * to camel case keys
 */
const fn = (key) => key.replace(/_([a-z])/g, (_, m) => m.toUpperCase());
export const trasnform = (o) => Object.fromEntries(
  Object.entries(o).map(([k, v]) => [fn(k), v]),
);

const transformToCamelCase = (input) => Object.entries(input)
  .reduce((acc, current) => {
    const [key, value] = current;
    acc[fn(key)] = value;
    return acc;
  }, {});

export const toCamelCase = (arrayOfObjects) => arrayOfObjects.map(transformToCamelCase);

export const getYear = (date) => date.split('-')[0];
