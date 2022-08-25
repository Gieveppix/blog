<template>
  <div class="comment">
    <div class="name_date">
      <h4>{{ comment.user_name }}</h4>
      <h5>{{ comment.created_at }}</h5>
      <h5>{{ showDelComment + " deletebutton" }}</h5>
    </div>
    <p>{{ comment.comment }}</p>
  </div>
</template>

<script>
import { useCommentsStore } from "@/stores/comments.js";
import { useUserStore } from "@/stores/user";

export default {
  props: ["comment"],
  setup(props) {
    let comment = props.comment;

    let ids = null;
    const userStore = useUserStore();
    const commentsStore = useCommentsStore();
    let showDelComment = false;

    console.log(
      "props commentUser ididiid ==================",
      props.comment.user_id
    );
    console.log("user ididid", userStore.user.user_id);

    if (props.comment.user_id === userStore.user.user_id) {
      showDelComment = true;
    }
    console.log("showDelCommet", showDelComment);
    return { comment, showDelComment };
  },
};
</script>

<style>
.name_date {
  display: flex;
  margin-top: 32px;
}
.name_date h5 {
  margin-top: 23.5px;
  margin-left: 3rem;
}
.comment p {
  margin-top: 0px;
}
</style>
