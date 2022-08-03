import { useSelector } from 'react-redux';
import { toCamelCase, trasnformToCamelCase } from '../../utils';

export const useVideosSelector = () => useSelector((state) => toCamelCase(state.videos));
export const useVideoSelector = () => useSelector((state) => trasnformToCamelCase(state.video));
export const useSortBySelector = () => useSelector((state) => state.sortBy);
export const useGenreSelector = () => useSelector((state) => state.genre);
export const useFormReuquestSelector = () => useSelector((state) => state.request);
