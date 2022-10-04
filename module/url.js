export const BASE_URL = "https://api.kontenbase.com/query/api/v1/ed5645dd-f5f3-468d-b5f9-50d322d2b646";

export const URL_API = {
  getPost: `${BASE_URL}/posts?$lookup=*`,
  createPost: `${BASE_URL}/posts`
}