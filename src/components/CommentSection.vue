<template>
  <div class="post-list">
    <div>
      <div class="comment_item" v-for="comment in comments" :key="comment.id">
        <SingleComment :comment="comment" />
      </div>
      <!-- TODO: nova komponenta koja prima prop comment-->
      <!-- comment je computed property -->
      <!-- Kada pritisnes edit, taj computed prop se seta na taj komentar -->
      
      
      <form @submit="addComment">
        <label v-if="comments.length === 0">Be The First To Comment!</label>
        <label v-else>New Comment:</label>
        <div>
          <input @focus="toggleButton" v-model="comment" type="text" required />
        </div>
        <button v-show="button">Add Comment</button>
      </form>
    </div>
    <div class="nocomment" v-show="comments.length === 0">
      <h4>No Comments</h4>
      <img width="100" src="@/components/assets/sadbox.png" />
      <h4>Disappointed, Not Sad</h4>
    </div>
  </div>
</template>

<script>
import SingleComment from "./SingleComment.vue";
import handleAddComment from "@/composables/comments/handleAddComment.js";
import { ref } from "vue";

export default {
  props: ["comments", "post_id", "user_id"],
  components: { SingleComment },
  setup(props) {
    const comment = ref("");

    const button = ref(false);
    const toggleButton = () => {
      button.value = !button.value;
      console.log(props.post_id, props.user_id, comment.value);
    };
    const addComment = () => handleAddComment(props.user_id, props.post_id, comment.value);


    // console.log(props.post_id, props.user_id, comment.value === '');
    // console.log("WAAA", props.user_id, props.post_id, comment.value);
    // addComment = () => {
    //   console.log("WAAA2", props.user_id, props.post_id, comment.value);
    //   handleAddComment(props.user_id, props.post_id, comment.value);
    // };

    return { comment, addComment, toggleButton, button };
  },
};
</script>

<style>
.post-list form {
  margin-top: 16px;
  margin-left: 0px;
  margin-bottom: 64px;
}

.post-list form input {
  width: 558px;
}
.nocomment {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.nocomment h4 {
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 32px;
}
</style>
