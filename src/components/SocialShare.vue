<template>
  <div :class="['ya-share2', className]"
    :data-services="socialServices"
    :data-title="social['title']"
    :data-description="social['text']">
  </div>
</template>

<script>
  export default {
    name: 'SocialShare',
    props: {
      isHide: Boolean,
      social: Object,
    },
    data() {
      return {
        socialServices: 'vkontakte,facebook,odnoklassniki,twitter,viber,whatsapp,telegram',
      }
    },
    computed: {
      className () { return this.isHide ? 'hide':'' },
    },
    mounted () {
      let shimsScript = document.createElement('script')
      shimsScript.setAttribute('src', '//yastatic.net/es5-shims/0.0.2/es5-shims.min.js')
      document.head.appendChild(shimsScript)
      let socialShareScript = document.createElement('script')
      socialShareScript.setAttribute('src', '//yastatic.net/share2/share.js')
      document.head.appendChild(socialShareScript)
    }
  }
</script>

<style scoped>
  .ya-share2 {
    margin: 1em 0 1em 0;
  }

  .ya-share2.hide {
    display:none;
  }
</style>