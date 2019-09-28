<template>
  <div id="app">
    <div id="spinner" v-if="loading">
      <flower-spinner
      :animation-duration="2500"
      :size="70"
      color="#FFCF40"
      />
    </div>
    <WelcomeMessage v-if="!isPlaying"/>
    <Forfeit v-else></Forfeit>
  </div>
</template>

<script>
  import { FlowerSpinner } from 'epic-spinners'
  import { mapState } from 'vuex'
  import Forfeit from './components/Forfeit.vue'
  import WelcomeMessage from './components/WelcomeMessage.vue'

  export default {
    name: 'app',
    components: {
      FlowerSpinner,
      Forfeit,
      WelcomeMessage
    },
    computed: mapState([
      'isPlaying',
      'loading',
    ])
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
  background: #45C7D5 url(./assets/bg.png) no-repeat scroll 0 -50px;
  /*height: 100%;*/
  margin: 0;
  padding: 0;
  color: #fff;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
