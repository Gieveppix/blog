const matchingTag = (computed, route, posts) => {
  const matchingtag = computed(() => {
    const calculatedMatchingTag = posts.value.filter((currPost) =>
      currPost.tags.includes(route.params.tag)
    );
    console.log('calculatedMatchingTag', calculatedMatchingTag)
    return calculatedMatchingTag;
  });
  return matchingtag;
};

export default matchingTag;
