import { useSelector } from 'react-redux';
import { RootState } from '../../types/redux';

const useArticles = () => {
  const articles = useSelector((state: RootState) => state.articleReducer.articles);
  function truncate(str: string, n: number) {
    return str.length > n ? str.slice(0, n - 1) + '(...)' : str;
  }
  return {
    articles,
    truncate,
  };
};
export default useArticles;
