<template>
  <div class="post-list">
    <div v-for="comment in comments" :key="comment.id">
      <SingleComment :comment="comment" />
    </div>
  </div>
</template>

<script>
import SingleComment from './SingleComment.vue';


export default {
  props: ["comments"],
  components: { SingleComment },
}
</script>

<style>

</style>