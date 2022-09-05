<template>
  <div class="top">
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <img @click="deletePost" v-show="showDelete" class="thrash" width="21" src="@/components/assets/trash-can-regular.svg" />
      <p class="pre">{{ post.body }}</p>
      <h3 style="margin-bottom: 0px;">Comments</h3>
      <div style="margin-top:32px;">
        <CommentSection :comments="comments" :post_id="post_id" :user_id="user_id" />
      </div>
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

import CommentSection from "@/components/CommentSection.vue";
import handleGetComment from "@/composables/comments/handleGetComment.js";

export default {
  props: ["id"],
  components: { Spinner, CommentSection },
  setup(props) {
    const userStore = useUserStore();
    const postsStore = usePostsStore();

    let id = null;
    let showDelete = false;

    if (userStore.user.user_id !== false) {
      for (const [index, item] of JSON.parse(
        JSON.stringify(postsStore.posts)
      ).entries()) {
        if (
          props.id == JSON.parse(JSON.stringify(postsStore.posts))[index].id
        ) {
          id = index;
        }
      }
      if (
        userStore.user.user_id ===
        JSON.parse(JSON.stringify(postsStore.posts))[id].users_id
      ) {
        showDelete = true;
      }
    }

    const { post, error, load } = handleGetPost(props.id);
    load();

    const router = useRouter();
    const { deletePost } = handleDeletePost(props.id, router);

    const { comments, error_comment, load_comments } = handleGetComment(
      props.id
    );
    load_comments();

    let post_id = props.id
    let user_id = userStore.user.user_id
    
    return { post, error, deletePost, showDelete, comments, error_comment, post_id, user_id };
  },
};
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}
.post {
  font-size: 20px;
  max-width: 800px;
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
.post .thrash {
  position: relative;
  padding-top: 33px;
  padding-left: 0px;
  float: right;
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
