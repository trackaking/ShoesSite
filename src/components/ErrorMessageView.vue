<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      {{ error }}
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
export default {
    name: 'ErrorMessageView',
    props: { error: Object },
};
</script>

<style scoped>

</style>
