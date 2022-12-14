import { createPost } from "./module/posts/create-post.js";
import { getPost } from "./module/posts/get-post.js";
import SortPopular from "./module/services/sort-popular.js";

const formElement = document.querySelector("form");
const postSectionElement = document.getElementById("post-section");
const textAreaElement = document.getElementById("post");
const submitButtonElement = document.getElementById("submit-button");
const popularPostElement = document.getElementById("popular-post-items");
const showAllPopularElement = document.getElementById("show-all-popular");

dayjs.extend(window.dayjs_plugin_relativeTime);
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

showAllPopularElement.addEventListener('click', () => {
  render(true);
});

const render = async (isPopular = false) => {
  const posts = await getPost();
  const popularPostWithLimit = SortPopular(posts, 5);

  if (isPopular) {
    const popularPost = SortPopular(posts);
    postSectionElement.innerHTML = popularPost
      .map(({ post, commentsCount, createPostDate }) => {
        const postedAt = createPostDate;
        const postedAtDisplay = dayjs(postedAt).fromNow();
        return `
      <div class="py-5 px-7 bg-grey-second rounded-2xl mb-2 flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <time class="font-light text-xs text-white-second">${postedAtDisplay}</time>
          <h1 class="font-medium text-lg text-white-primary">${post}</h1>
        </div>
        <p class="font-normal text-base text-primary">${commentsCount > 0 ? commentsCount : "Add"
          } ${commentsCount > 1 ? "comments" : "comment"}</p>
      </div>
    `;
      })
      .join("");
  } else {
    postSectionElement.innerHTML = posts
      .map(({ post, commentItems, createPostDate }) => {
        const lengthComment = commentItems.length;
        const postedAt = createPostDate;
        const postedAtDisplay = dayjs(postedAt).fromNow();
        return `
      <div class="py-5 px-7 bg-grey-second rounded-2xl mb-2 flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <time class="font-light text-xs text-white-second">${postedAtDisplay}</time>
          <h1 class="font-medium text-lg text-white-primary">${post}</h1>
        </div>
        <p class="font-normal text-base text-primary">${lengthComment > 0 ? lengthComment : "Add"
          } ${lengthComment > 1 ? "comments" : "comment"}</p>
      </div>
    `;
      })
      .join("");

  }

  popularPostElement.innerHTML = popularPostWithLimit.map(({ post, commentsCount }) => {
    return `
        <div class="flex flex-col gap-1">
          <h1 class="text-white-primary text-lg font-medium leading-none">${post}</h1>
          <p class="text-white-second font-normal text-sm">${commentsCount > 0 ? commentsCount : "Add"} ${commentsCount > 1 ? "comments" : "comment"}</p>
        </div>
      `
  }).join("");
};

formElement.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();
    const form = new FormData(event.target);
    const postValue = form.get("post");
    const addPost = await createPost(postValue);
    event.target.reset();
    render();
  } catch (error) {
    console.error(error.message);
  }
});



render();
