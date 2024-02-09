import axios from "axios";

const myApi = axios.create({
  baseURL: `https://nc-news-7wgo.onrender.com/api`,
});

export const fetchAllArticles = (query, searchParam, order, topic) => {
  const params = new URLSearchParams();
  if (topic) params.append("topic", topic);
  if (query && searchParam) params.append(query, searchParam);
  if (order) params.append("order", order);

  return myApi.get(`/articles`, { params }).then((response) => {
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
    });
};

export const postComment = (article_id, username, body) => {
  return myApi
    .post(`/articles/${article_id}/comments`, { username, body })
    .then((response) => {
      return response.data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return myApi.delete(`/comments/${comment_id}`);
};

export const fetchAllTopics = () => {
  return myApi.get(`/topics`).then((response) => {
    return response.data.topics;
  });
};
