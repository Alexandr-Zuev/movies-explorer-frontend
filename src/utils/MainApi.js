import { BASE_URL } from '.././config.js';

class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
  }
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }).then(this._getResponseData);
  }

  editProfile(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      credentials: "include",
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(this._getResponseData);
  }

  addMovieToFavorites(data) {
    return fetch(`${this.baseUrl}/movies`, {
      credentials: "include",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(this._getResponseData);
  }

  deleteMovieFromFavorites(id) {
    return fetch(`${this.baseUrl}/movies/${id}`, {
      credentials: "include",
      method: 'DELETE',
    }).then(this._getResponseData);
  }

  getMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      credentials: "include",
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(this._getResponseData);
  }
}
const api = new Api({
  baseUrl: BASE_URL,
});

export { Api, api };