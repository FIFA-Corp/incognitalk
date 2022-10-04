import { getPost } from "./module/posts/get-post.js";

const renderPost = async () => {
  const posts = await getPost();
  console.log(posts);
}

renderPost();