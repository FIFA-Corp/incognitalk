import { URL_API } from "../url.js"

export async function getPost() {
  try {
    const res = await fetch(URL_API.getPost);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}