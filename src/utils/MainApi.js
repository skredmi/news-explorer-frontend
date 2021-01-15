export const BASE_URL = "https://api.diplom.students.nomoredomains.work";

export const register = (password, email, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email, name }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  });
};

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        return data;
      } else {
        return;
      }
    });
};

export const getContent = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  });
};

export const getArticles = () => {
  return fetch(`${BASE_URL}/articles`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((res) => {
      return Promise.reject(res.status);
    });
};

export const deleteArticle = (id) => {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((res) => {
      return Promise.reject(res.status);
    });
};

export const createArticle = ({
    keyword, title, text, date, source, link, image
  }) => {
  const article =  {
    keyword, title, text, date, source, link, image
  };
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(article),
  })
    .then((res) => {
      return res.json();
    })
    .catch((res) => {
      return Promise.reject(res.status);
    });
};
