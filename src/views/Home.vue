<template>
  <div class="top">
    <div class="home">
      <div v-if="error">{{ error }}</div>
      <div  v-if="posts.length">
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
import handleGetPosts from "../composables/postJs/handleGetPosts.js";
import Spinner from "@/components/Spinner.vue";
import TagCloud from "@/components/TagCloud.vue";

import { usePostsStore } from "@/stores/posts.js";

export default {
  name: "Home",
  components: { PostList, Spinner, TagCloud },
  setup() {

    const { posts, error, load } = handleGetPosts();
    let allPosts;
    
    const getPosts = async () => {
      const postss = await load()
      return postss
    }
    
    getPosts().then(function(result){
      const postsStore = usePostsStore()
      postsStore.posts = result
    })

    
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
