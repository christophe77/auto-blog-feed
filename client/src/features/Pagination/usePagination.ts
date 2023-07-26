import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../store/reducers/pageReducer';
import { RootState } from '../../types/redux';

const usePagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.pageReducer.page);
  const totalArticles = useSelector((state: RootState) => state.articleReducer.articleCount);
  const articles = useSelector((state: RootState) => state.articleReducer.articles);
  const articlePerPAge = articles?.length;
  const pageCount = Math.ceil(totalArticles / articlePerPAge);
  

  function handleChangePage(event: React.ChangeEvent<unknown>, value: number) {
    dispatch(setPage(value));
  }
  return {
    page,
    pageCount,
    handleChangePage,
  };
};
export default usePagination;
