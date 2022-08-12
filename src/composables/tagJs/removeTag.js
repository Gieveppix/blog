const removeTag = (tags, tag) => {
  const removetag = async () => {
    tags.value.pop(tag.value);
    tag.value = "";
  };
  return removetag;
};

export default removeTag;
