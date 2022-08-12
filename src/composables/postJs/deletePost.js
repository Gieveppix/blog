import { ref } from "vue";

const deletePost = (id, router) => {
  const handleDelete = async () => {
    const post = ref(null);
    const error = ref(null);
    try {
      let data = await fetch("http://localhost:3000/posts/" + id);
      if (!data.ok) {
        throw Error("that post does not exist");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
    await fetch("http://localhost:3000/post/" + id, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
    router.push({ name: "Home" });
  };
  return { handleDelete };
};

export default deletePost;
