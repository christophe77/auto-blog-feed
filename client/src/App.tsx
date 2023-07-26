import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './store/hooks'
import Loading from './features/Loading/Loading';
import AppRouter from './routes/AppRouter';
import { getArticlesThunk, getArticlesCountThunk} from './store/reducers/articleReducer';
import { RootState } from './types/redux';
function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state: RootState) => state.articleReducer.isArticleLoading);
  const page = useAppSelector((state: RootState) => state.pageReducer.page);
  
  useEffect(()=>{
    dispatch(getArticlesThunk(page));
  },[page])

  useEffect(() => {
    dispatch(getArticlesCountThunk());
  }, []);

  return isLoading ? <Loading isLoading={isLoading} /> : <AppRouter />;
}

export default App;
