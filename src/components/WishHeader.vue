<template>
  <h1 :class="['container-header', className]">
    {{ text }}
  </h1>
</template>

<script>
  export default {
    name: 'WishHeader',
    props: {
      title: String,
      isWishSent: Boolean,
      isWishFormInFocus: Boolean,
    },
    computed: {
      className () { return (this.isWishSent ? 'done ': '') + (this.isWishFormInFocus ? 'input-focus ': '') },
      text () { return this.isWishSent ? 'Готово' : this.title }
    }
  }
</script>

<style scoped>
  .container-header {
    font-weight: 300;
    margin: 0;
    padding: 0;
    opacity: 1;
    transition: all 0.5s;
  }

  .container-header.done {
    margin: 0 0 1em 0;
  }

  .container-header.input-focus {
    opacity: 0.5;
  }

  @media screen and (max-width: 600px), (max-height: 400px) {
    .new-year > .container-header {
      font-size: 1.5em;
    }

    .container-header {
      margin: -1em 0 -2em 0;
    }
  }
</style>