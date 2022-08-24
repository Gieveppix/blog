import { ref } from "vue";

const handleGetComments = () => {
  const comments = ref([]);
  const error = ref(null);
  let commentss;

  const load_comments = async () => {
    try {
      let data = await fetch("http://localhost:3000/comments");
      if (!data.ok) {
        throw Error("no data available");
      }
      comments.value = await data.json();
      // commentss = JSON.parse(JSON.stringify(comments.value))
      // return comments;
    } catch (err) {
      error.value = err.message;
    }
  };
  return { comments, error, load_comments }; //commentss
};
export default handleGetComments;