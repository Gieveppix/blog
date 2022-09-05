const handleMatchingAuthor = (computed, route, posts) => {
  const matchingauthor = computed(() => {
    const calculatedMatchingAuthor = posts.value.filter((currPost) =>
      currPost.user_name.includes(route.params.author)
    );
    return calculatedMatchingAuthor;
  });
  return matchingauthor;
};

export default handleMatchingAuthor;
