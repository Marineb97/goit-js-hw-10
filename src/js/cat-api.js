// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_R5wMgLyiZTjcDcUs4bMdR91LgT8U2BzzuBFyE6dUEmtD95J1qFk5PYiestKaJfJO";

const url = 'https://api.thecatapi.com/v1';
const api_key = "live_R5wMgLyiZTjcDcUs4bMdR91LgT8U2BzzuBFyE6dUEmtD95J1qFk5PYiestKaJfJO";

export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });       
};

export function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });  
};