import { useSelector } from 'react-redux';

export const useVideoSelector = () => useSelector((state) => state.videos);
