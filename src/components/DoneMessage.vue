<template>
  <div :class="['container-done-msg', className]">
    <p>{{ messages['done'] }}</p>
    <a href='#' :class="['link', className]" id='again' @click=sendAgain>{{ messages['again'] }}
    </a>
    <Banner :isShown="isWishSent" :rtbId="bannerRtbId" rtbBlockId="bannerRtbBlockId" />
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Banner from './Banner'

  export default {
    name: 'DoneMessage',
    props: {
      messages: Object,
      isWishSent: Boolean,
      bannerRtbId: String,
      bannerRtbBlockId: String,
    },
    components: {
      Banner
    },
    computed: {
      className() { return this.isWishSent ? '' : 'hide' },
    },
    methods: {
      sendAgain () {
        this.SET_WISH_SENT({ isSent: false })
      },
      ...mapActions([
        'SET_WISH_SENT'
      ])
    }
  }
</script>

<style scoped>
  .container-done-msg {
    width: 100%;
    text-align: center;
    flex: none;
    text-shadow: 0 1px 3px black;
    transition: color 0.5s, transform 1s, text-shadow 0.5s;
  }

  .container-done-msg.hide {
    position: relative;
    transform: translate(0, 50px);
    color: transparent;
    text-shadow: 0 1px 3px transparent;
  }

  .container-done-msg p {
    margin: 0;
  }

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