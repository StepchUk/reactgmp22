/**
 * Group of functions for transforming object or array of objects which keys have snake case,
 * to camel case keys
 */
const fn = (key) => key.replace(/_([a-z])/g, (_, m) => m.toUpperCase());
export const trasnform = (o, replacer) => Object.fromEntries(
  Object.entries(o).map(([k, v]) => [replacer(k), v]),
);

export const toCamelCase = (arrayOfObjects) => {
  const newarrayOfObjects = [];

  arrayOfObjects.forEach((value, key) => {
    newarrayOfObjects[key] = trasnform(value, fn);
  });

  return newarrayOfObjects;
};

export const getYear = (date) => date.split('-')[0];
