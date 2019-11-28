<template>
  <span :class="['banner-done', className]">
    <div :id="bannerId"></div>
  </span>
</template>

<script>
  export default {
    name: 'Banner',
    props: {
      isShown: Boolean,
      rtbId: String,
    },
    computed: {
      className () { return this.isShown ? '' : 'hide' },
      bannerId () { return this.isShown ? '' : this.rtbId }
    }
  }
</script>

<style scoped>

</style>