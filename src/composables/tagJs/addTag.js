const addTag = (tags, tag) => {
  const addtag = async () => {
    if (!tags.value.includes(tag.value)) {
      if (tag.value) {
        tag.value = tag.value.replace(/\s/, ""); //removes whitspace
        tags.value.push(tag.value);
      }
    }
    tag.value = "";
  };
  return addtag;
};

export default addTag;
