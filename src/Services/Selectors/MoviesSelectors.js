import { useSelector } from 'react-redux';
import { toCamelCase } from '../Utils/utils';

export const useVideoSelector = () => useSelector((state) => toCamelCase(state.videos));
export const useSortBySelector = () => useSelector((state) => state.sortBy);
export const useGenreSelector = () => useSelector((state) => state.genre);
