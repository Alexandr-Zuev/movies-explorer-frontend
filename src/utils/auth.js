import { BASE_URL } from '.././config.js';

export const signUp = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    credentials: "include",
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(response => {
      return response.json();
    })
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));
};

export const signIn = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    credentials: "include",
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data) {
        console.log(data)
        localStorage.setItem('jwt', data.token);
        return data;
      }
    })
    .catch(err => console.log(err));
};

export const signOut = () => {
  return fetch(`${BASE_URL}/signout`, {
    credentials: "include",
    method: 'POST',
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};
