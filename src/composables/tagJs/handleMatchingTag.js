const handleMatchingTag = (computed, route, posts) => {
  const matchingtag = computed(() => {
    const calculatedMatchingTag = posts.value.filter((currPost) =>
      currPost.tags.includes(route.params.tag)
    );
    return calculatedMatchingTag;
  });
  return matchingtag;
};

export default handleMatchingTag;
