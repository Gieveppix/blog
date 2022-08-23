const handleAddPost = (router, title, body, tags, img, user) => {
  const addpost = async () => {
    const post = {
      title: title.value,
      body: body.value,
      tags: tags.value,
      img: img.value,
      users_id: user
    };
    await fetch("http://localhost:3000/create", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(post),
    });
    router.push({ name: "Home" });
  };
  return addpost;
};

export default handleAddPost;
