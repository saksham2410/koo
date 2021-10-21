const BASE_URL = "https://gorest.co.in/public";

export const FETCH_POSTS = (page) => BASE_URL + `/v1/posts?page=${page}`;
