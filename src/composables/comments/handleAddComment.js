const handleAddComment = async (user_id, post_id, comment) => {
  const newComment = {
    user_id: user_id,
    post_id: post_id,
    comment: comment,
  };
  console.log(newComment);
  await fetch("http://localhost:3000/comments", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newComment),
  });
};

export default handleAddComment;