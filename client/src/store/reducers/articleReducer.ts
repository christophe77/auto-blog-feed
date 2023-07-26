import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from '../../types/article';
import { getArticles, getArticleCount } from '../../api/article';

interface ArticleState {
  articles: Article[];
  articleCount: number;
  isArticleLoading: boolean;
}

const initialState = { articles: [], isArticleLoading: true, articleCount:0 } as ArticleState;

export const getArticlesThunk = createAsyncThunk('article/getArticles', async (page: number) => {
  const res = await getArticles(page);
  return res;
});

export const getArticlesCountThunk = createAsyncThunk('article/getArticleCount', async () => {
  const res = await getArticleCount();
  return res;
});

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticlesThunk.pending, (state) => {
      state.isArticleLoading = true;
    });
    builder.addCase(getArticlesThunk.fulfilled, (state, action) => {
      state.isArticleLoading = false;
      state.articles = action.payload;
    });
    builder.addCase(getArticlesThunk.rejected, (state) => {
      state.isArticleLoading = false;
    });
    builder.addCase(getArticlesCountThunk.pending, (state) => {
      state.isArticleLoading = true;
    });
    builder.addCase(getArticlesCountThunk.fulfilled, (state, action) => {
      state.isArticleLoading = false;
      state.articleCount = action.payload;
    });
    builder.addCase(getArticlesCountThunk.rejected, (state) => {
      state.isArticleLoading = false;
    });
  },
});

export const articleReducer = articleSlice.reducer;
