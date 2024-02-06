import axios from "axios";

const myApi = axios.create({
  baseURL: `https://nc-news-7wgo.onrender.com/api`,
});

export const fetchAllArticles = () => {
  return myApi.get(`/articles`).then((response) => {
    return response.data.articles;
  });
};

export const fetchSingleArticle = (article_id) => {
  return myApi.get(`/articles/${article_id}`).then((response) => {
    return response.data.articles;
  });
};
