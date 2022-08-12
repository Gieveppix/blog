const addPost = (router, title, body, tags, img) => {
  const addpost = async () => {
    const post = {
      title: title.value,
      body: body.value,
      tags: tags.value,
      img: img.value,
    };
    // console.log("tagovi" + " " + tags.value);
    await fetch("http://localhost:3000/create", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(post),
    });
    router.push({ name: "Home" });
  };
  return addpost;
};

export default addPost;
