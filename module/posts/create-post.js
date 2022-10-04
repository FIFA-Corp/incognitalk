import { URL_API } from "../url.js";

export async function createPost(post) {
  try {
    const payload = {
      post
    }
    const responseCreatePost = await fetch(URL_API.createPost, {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    const data = await responseCreatePost.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}