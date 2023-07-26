import axiosInstance from './axiosInstance';
import { Article } from '../types/article';

export async function getArticles(page: number): Promise<Article[]> {
  const response = await axiosInstance.get(`/article/page/${page}`);
  return response.data;
}

export async function getArticle(articleId: number): Promise<Article[]> {
  const response = await axiosInstance.get(`/article/id/${articleId}`);
  return response.data;
}

export async function getArticleCount(): Promise<number> {
  const response = await axiosInstance.get(`/article/count`);
  return response.data.count || 0;
}
