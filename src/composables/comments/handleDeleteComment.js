import {ref} from "vue"

const handleDeleteComment = async (id, post_id, router) => {
    const comment = ref(null);
    const error = ref(null);
    try {
      let data = await fetch(`http://localhost:3000/comments/${id}`);
      if (!data.ok) {
        throw Error("that post does not exist");
      }
      comment.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
    await fetch(`http://localhost:3000/comments/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
    router.go( {path: `/posts/${post_id}`} );
};

export default handleDeleteComment;
