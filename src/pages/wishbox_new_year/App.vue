<template>
  <div id="app">
    <div id="spinner" v-if="loading">
      <flower-spinner
      :animation-duration="2500"
      :size="70"
      color="#FFF"
      />
    </div>
    <Wish wishType="ny" v-else />
  </div>
</template>

<script>
  import { FlowerSpinner } from 'epic-spinners'
  import { mapState, mapActions } from 'vuex'
  import Wish from '@/components/Wish.vue'

  export default {
    name: 'app',
    components: {
      FlowerSpinner,
      Wish
    },
    computed: mapState([
      'loading',
    ]),
    mounted: function () {
      this.SET_WISH_COUNTER();
    },
    methods: {
      ...mapActions([
        'SET_WISH_COUNTER',
      ])
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:500,400,300&subset=latin,cyrillic');

html {
    height: 100%;
    margin: 0;
    padding: 0;
}

body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background: #00001b;
}

#app {
  height: 100%;
}

#spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
}
</style>
