const removeTag = (tags, tag) => {
  const removetag = () => {
    for(let i = 0; i < tags.value.length; i++){
      console.log(tags.value[i], i)
      tags.value.splice(tags.value[i], 1);
      tag.value = "";
    }
  };
  return removetag;
};

export default removeTag;
