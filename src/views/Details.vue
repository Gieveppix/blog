<template>
  <div class="top">
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <button class="delete" @click="deletePost" v-show="showDelete">DELETE POST</button>
      <h3 style="margin-bottom: 0px;">Comments</h3>
      <CommentSection :comments="comments"/>
    </div>
    <p v-else>
      <Spinner />
    </p>
  </div>
</template>

<script>
import handleDeletePost from "../composables/postJs/handleDeletePost.js";
import handleGetPost from "../composables/postJs/handleGetPost.js";
import Spinner from "@/components/Spinner.vue";
import { useRouter } from "vue-router";

import { useUserStore } from "@/stores/user.js";
import { usePostsStore } from "@/stores/posts.js";

import CommentSection from "@/components/CommentSection.vue"
import handleGetComments from "@/composables/comments/handleGetComments.js"

export default {
  props: ["id"],
  components: { Spinner, CommentSection },
  setup(props) {
    const userStore = useUserStore();
    const postsStore = usePostsStore();
    let id = null;
    let showDelete = false;
    
    if((userStore.user.user_id) !== false) {

      for(const [index, item] of (JSON.parse(JSON.stringify(postsStore.posts))).entries()) {
        
        if(((props.id) == (JSON.parse(JSON.stringify(postsStore.posts))[index].id))){
          id = index
        }
      }
      
      if ((userStore.user.user_id) === (JSON.parse(JSON.stringify(postsStore.posts))[id].users_id)) {
        showDelete = true
      }
    }
    
    const { post, error, load } = handleGetPost(props.id); 
    load();

    const router = useRouter();
    const { deletePost } = handleDeletePost(props.id, router);


    const { comments, error_comment, load_comments } = handleGetComments();
    load_comments();

    return { post, error, deletePost, showDelete, comments, error_comment};
  },
};
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: rgb(67, 67, 67);
  line-height: 1.5em;
  margin-top: 40px;
}
.comment {
  
  line-height: 0em;
  margin-top: 0px;
}
.comment div {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  height: 90px;
}
.comment h4 {
  margin-top: 60px;
}
.pre {
  white-space: pre-wrap;
}
button.delete {
  margin: auto;
}

@media screen and (max-width: 600px) {
    .post {
      max-width: 400px;
    }
}

@media screen and (max-width: 976px) and (min-width: 600px) {
  .post {
    max-width: 600px;
  }
}

@media screen and (max-width: 1250px) and (min-width: 976px) {
  .post {
    max-width: 900px;
  }
}
</style>
