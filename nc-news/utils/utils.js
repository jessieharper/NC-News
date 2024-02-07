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

export const fetchArticleComments = (article_id) => {
  return myApi.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const patchArticleVotes = (article_id, vote) => {
  return myApi
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then((response) => {
      return response.data.comment;
    })
    .catch((err) => console.log(err));
};

export const postComment = (article_id, username, body) => {
  return myApi
    .post(`/articles/${article_id}/comments`, { username, body })
    .then((response) => {
      return response.data.comment;
    })
    .catch((err) => console.log(err));
};
