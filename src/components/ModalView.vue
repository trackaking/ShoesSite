<template>
  <div v-if="modalComponent.errorMessage !== '' && modalComponent.showModal">
  <div  id="modal" class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div tabindex="0" role="alert"
           style="white-space: pre;">
        <span class=" subtitle is-4.5 has-text-danger">
          {{ modalComponent.errorMessage }}
        </span>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close"
            v-on:click="closeModal"></button>
  </div>
  </div>
</template>

<script>
export default {
    name: 'ModalView',
    props: { modalComponent: Object },
    methods: {
        closeModal() {
            // eslint-disable-next-line no-undef,vue/no-mutating-props
            this.modalComponent.showModal = false;
            // eslint-disable-next-line vue/no-mutating-props
            this.modalComponent.errorMessage = '';
        },
    },
};
</script>

<style scoped>

</style>
