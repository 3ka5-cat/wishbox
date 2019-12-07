<template>
  <div :class="['container-counter', className]" >
    <p>{{ recipient }} уже позаботился о <strong>{{ wishCount }}</strong> запросах</p>
    <p>Если рассказать об этом друзьям, счастливых людей станет больше</p>
    <SocialShare :social="social" :isHide="isHidden" />
  </div>
</template>

<script>
  import SocialShare from './SocialShare'

  export default {
    name: 'WishCounter',
    props: {
      recipient: String,
      wishCount: Number,
      isHidden: Boolean,
      social: Object,
    },
    components: {
      SocialShare
    },
    computed: {
      className() { return this.isHidden ? 'hide' : ''}
    }
  }
</script>

<style scoped>
  .container-counter {
    width: 100%;
    text-align: center;
    margin: 2em 0 0 0;
    flex: none;
    text-shadow: 0 1px 3px black;
    transition: color 0.5s, transform 1s, text-shadow 0.5s;
  }

  .container-counter.hide {
    position: relative;
    transform: translate(0, 50px);
    color: transparent;
    text-shadow: 0 1px 3px transparent;
    background: transparent;
  }

  .container-counter p {
    margin: 0;
  }

  @media screen and (max-width: 600px), (max-height: 400px) {
    .container-counter {
      margin: 2em 0 0 0;
      background: rgba(56, 65, 98, 0.40);
    }
  }
</style>