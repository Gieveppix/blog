<template>
  <div class="top">
    <div class="home">
      <div v-if="error">{{ error }}</div>
      <div v-if="posts.length">
        <PostList :posts="posts" />
        <TagCloud :posts="posts" />
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
import Spinner from "@/components/Spinner.vue";
import TagCloud from "@/components/TagCloud.vue";

export default {
  name: "Home",
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { posts, error, load } = getPosts();

    load();
    return { posts, error };
  },
};
</script>

<style>
.top {
  margin-top: 192px;
}
.home {
  color: rgb(67, 67, 67);
  max-width: 1300px;
  margin: 0 auto;
}
.homeTitle {
  padding: 20px;
}
</style>
