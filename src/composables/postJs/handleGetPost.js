import { ref } from "vue";

const handleGetPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts/" + id);
      if (!data.ok) {
        throw Error("that post does not exist");
      }
      let postdata = await data.json();
      post.value = postdata;
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};
export default handleGetPost;
