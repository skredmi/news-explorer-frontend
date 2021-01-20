import { NEWS_URL, API_KEY } from "./constants";

let date = new Date();
const today = date;
date.setDate(date.getDate() - 7);
const fromDate = date;

export const getNews = (keyword) => {
  return fetch(
    `${NEWS_URL}?q=${keyword}&apiKey=${API_KEY}&from=${fromDate}&to=${today}&sortBy=publishedAt&pageSize=100`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  ).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};
