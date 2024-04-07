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

    getInitialFilms() {
        return fetch(`${this.baseUrl}`).then(this._getResponseData);
    }
}

const movieapi = new Api({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',

});

export { Api, movieapi };