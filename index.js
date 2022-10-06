import { createPost } from "./module/posts/create-post.js";
import { getPost } from "./module/posts/get-post.js";

const formElement = document.querySelector("form");
const postSectionElement = document.getElementsByClassName("post-section")[0];

const renderPost = async () => {
  const posts = await getPost();
  postSectionElement.innerHTML = posts
    .reverse()
    .map(({ post }) => {
      return `
      <div class="post-card">
        <h1>${post}</h1>
      </div>
    `;
    })
    .join("");
};

formElement.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();
    const form = new FormData(event.target);
    const postValue = form.get("post");
    const addPost = await createPost(postValue);
    event.target.reset();
    renderPost();
  } catch (error) {
    console.error(error.message);
  }
});

renderPost();
