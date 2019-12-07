<template>
  <span>
    <span v-if="data.textBeforeAction">
      {{ data.textBeforeAction }}
      <br>
    </span>
    <a href='#' :class="['link', className]" id='again' @click=sendOneMoreWish>{{ data.callToActionText }}</a>
  </span>

</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'OneMoreWish',
    props: {
      data: Object,
      isHidden: Boolean,
    },
    computed: {
      className() { return this.isHidden ? 'hide' : '' },
    },
    methods: {
      sendOneMoreWish () {
        this.SET_WISH_SENT({ isSent: false })
      },
      ...mapActions([
        'SET_WISH_SENT'
      ])
    },
  }
</script>

<style scoped>
  a,
  a:hover {
    text-decoration: none;
  }

  .link {
    display: inline-block;
    color: #fff;
    border-bottom: 1px dashed #fff;
  }

  .link.hide {
    position: relative;
    transform: translate(0, 50px);
    color: transparent;
    text-shadow: 0 1px 3px transparent;
    border-bottom: none;
  }
</style>