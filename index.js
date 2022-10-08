import { createPost } from "./module/posts/create-post.js";
import { getPost } from "./module/posts/get-post.js";

const formElement = document.querySelector("form");
const postSectionElement = document.getElementById("post-section");
const textAreaElement = document.getElementById("post");
const submitButtonElement = document.getElementById("submit-button");

textAreaElement.addEventListener("input", () => {
  if (
    textAreaElement.value.length == 0 ||
    textAreaElement.value.trim().length == 0
  ) {
    submitButtonElement.disabled = true;
  } else {
    submitButtonElement.disabled = false;
  }
});

const renderPost = async () => {
  const posts = await getPost();
  postSectionElement.innerHTML = posts
    .reverse()
    .map(({ post, commentItems, createPostDate }) => {
      const lengthComment = commentItems.length;
      return `
      <div class="py-5 px-7 bg-grey-second rounded-2xl mb-2 flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <time class="font-light text-xs text-white-second">${createPostDate}</time>
          <h1 class="font-medium text-lg text-white-primary">${post}</h1>
        </div>
        <p class="font-normal text-base text-primary">${
          lengthComment > 0 ? lengthComment : "Add"
        } ${lengthComment > 1 ? "comments" : "comment"}</p>
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
