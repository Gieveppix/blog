<template>
  <div class="post-list">
    <div>
      <div v-for="comment in comments" :key="comment.id">
        <SingleComment :comment="comment" />
      </div>
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

export default {
  props: ["comments", "id"],
  components: { SingleComment },
};
</script>

<style>
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
