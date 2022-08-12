<template>
  <div class="top">
    <div class="home">
      <h1 class="homeTitle">#{{ titleTag }}</h1>
      <div v-if="error">{{ error }}</div>
      <div v-if="posts.length">
        <PostList :posts="matchingtag" />
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/postJs/getPosts";
import matchingTag from "../composables/tagJs/matchingTag.js";
import Spinner from "@/components/Spinner.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  name: "Tag",
  components: { PostList, Spinner },

  setup() {
    const route = useRoute();
    const titleTag = route.params.tag;

    const { posts, error, load } = getPosts();
    load();

    const matchingtag = matchingTag(computed, route, posts);

    return { matchingtag, titleTag, posts, error };
  },
};
</script>

<style></style>
