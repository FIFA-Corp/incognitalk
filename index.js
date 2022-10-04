import { createPost } from "./module/posts/create-post.js";
import { getPost } from "./module/posts/get-post.js";

const formElement = document.querySelector('form');

const renderPost = async () => {
  const posts = await getPost();
  console.log(posts);
}

formElement.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const form = new FormData(formElement);
    const postValue = form.get('post');
    const addPost = await createPost(postValue);
    renderPost();
  } catch (error) {
    console.error(error.message);
  }
})

renderPost();