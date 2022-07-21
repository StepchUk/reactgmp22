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

const isIsoDate = (str) => !/\d{4}-\d{2}-\d{2}/.test(str);

const isValidUrl = (url) => {
  try {
    return new URL(url);
  } catch (e) {
    return false;
  }
};

export const toCamelCase = (arrayOfObjects) => arrayOfObjects.map((o) => trasnform(o, camelFn));
export const toSnakeCase = (o) => trasnform(o, snakeFn);

export const getYear = (date) => date.split('-')[0];

export const movieFormValidation = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }

  if (!isIsoDate(values.releaseDate)) {
    errors.releaseDate = 'Incorrect date format. Date must be in YYYY-mm-dd format';
  }

  if (!values.posterPath) {
    errors.posterPath = 'Required';
  } else if (!isValidUrl(values.posterPath)) {
    errors.posterPath = 'URL is not correct';
  }

  if (!values.runtime) {
    errors.runtime = 'Required';
  }

  if (!values.overview) {
    errors.overview = 'Required';
  }

  if (!values.genres) {
    errors.genres = 'Required';
  }
  return errors;
};
