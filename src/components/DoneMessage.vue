<template>
  <div :class="['container-done-msg', className]">
    <p>{{ message }}</p>
    <span v-if="!isHidden">
      <span v-for="action in actions" :key="action.name">
        <component
            :is="action.component"
            :data="action.data"
            :isHidden="isHidden"
        ></component>
      </span>
    </span>
    <Banner :isHidden="isHidden" />
  </div>
</template>

<script>
  import Banner from './Banner'

  export default {
    name: 'DoneMessage',
    props: {
      message: String,
      isHidden: Boolean,
      actions: Array,
    },
    components: {
      Banner
    },
    computed: {
      className() { return this.isHidden ? 'hide' : '' },
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
</style>