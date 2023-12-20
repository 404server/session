import axios from "axios";

let auth = "https://accounts.spotify.com/authorize?";
let id = "d42cd637cda144c798602aaf13ad1647";
let url = "http://localhost:3000/";
let scopes = ["user-library-read","playlist-read-private"];

export const login = `${auth}client_id=${id}&redirect_uri=${url}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;

const api = axios.create({
    baseURL: "https://api.spotify.com/v1/"
    }
);

export const setClientToken = (token) => {
    api.interceptors.request.use(async function (config) {
        config.headers.Authorization = "Bearer " + token;
        return config;
    })
}

export default api;

