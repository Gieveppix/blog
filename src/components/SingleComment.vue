<template>
  <div class="comment">
    <div class="name_date">
      <h4>{{ comment.user_name }}</h4>
      <h5>{{ comment.created_at }}</h5>
      <img class="thrash" @click="deleteComment" v-show="showDelComment" width="21" src="@/components/assets/vectorpaintThrashColor.svg"/>
      <!-- <img class="edit" v-show="showDelComment" width="23" src="@/components/assets/vectorpaintEditColor.svg"> -->
    </div>
    <div class="comment_buttons">
      <p>{{ comment.comment }}</p>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import handleDeleteComment from "@/composables/comments/handleDeleteComment"

export default {
  props: ["comment"],
  setup(props) {
    let comment = props.comment;

    let ids = null;
    const userStore = useUserStore();
    let showDelComment = false;

    if (props.comment.user_id === userStore.user.user_id) {
      showDelComment = true;
    }

    const router = useRouter();
    const deleteComment = () => handleDeleteComment(props.comment.id, props.comment.post_id,  router);

    return { comment, showDelComment, deleteComment };
  },
};
</script>

<style>
.name_date {
  display: flex;
  margin-top: 32px;
  max-width: 557px;
}
.name_date h4 {
  color: #7057dc;
}
.name_date h5 {
  margin-top: 30.5px;
  margin-left: 3rem;
  margin-bottom: 0px;
}

.comment .comment_buttons p {
  max-width: 512px;
  margin-top: 0px;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
  border-left: 5px solid #7057dc;
}
.thrash, .edit {
  max-height: 24px;
  padding-top: 29px;
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  margin-left: 534px;
}
.edit {
  padding-left: 510px;
}
</style>
