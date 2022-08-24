<template>
  <div class="comment">
    <div>
      <h4>{{ comment.user_name }}</h4>
      <p>{{ comment.comment }}</p> 
    </div>
  </div>
</template>

<script>

export default {
  props: ["comment"],
  setup(props) {

    return props.comment
  }
}
</script>

<style>

</style>