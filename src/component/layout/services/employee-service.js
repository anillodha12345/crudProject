import httpClient from "../../../http-common";

const getAll = () => {
    return httpClient.get('/posts');
}

const create = data => {
    return httpClient.post("/posts", data);
}

const get = id => {
    return httpClient.get(`/posts/${id}`);
}

const update = data => {
    return httpClient.put('/posts', data);
}

const remove = id => {
    return httpClient.delete(`/posts/${id}`);
}
export default { getAll, create, get, update, remove };

