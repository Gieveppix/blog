<template>
  <div class="top">
    <div class="home">
      <h1 class="homeTitle">Author: {{ titleTag }}</h1>
      <div v-if="error">{{ error }}</div>
      <div v-if="posts.length">
        <PostList :posts="matchingauthor" />
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import handleGetPosts from "../composables/postJs/handleGetPosts";
import handleMatchingAuthor from "../composables/author/handleMatchingAuthor.js";
import Spinner from "@/components/Spinner.vue";

import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  name: "Author",
  components: { PostList, Spinner },

  setup() {
    const route = useRoute();
    const titleTag = route.params.author;

    const { posts, error, load } = handleGetPosts();
    load();

    const matchingauthor = handleMatchingAuthor(computed, route, posts);

    return { matchingauthor, titleTag, posts, error };
  },
};
</script>

<style></style>
