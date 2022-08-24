import { ref } from "vue";

const handleGetPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  let postss;

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts");
      if (!data.ok) {
        throw Error("no data available");
      }
      posts.value = await data.json();
      postss = JSON.parse(JSON.stringify(posts.value))
      return postss;
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, error, load, postss };
};
export default handleGetPosts;
