<template>
  <div class="container h-100">
    <div class="row" id="header">
      <h1>
        Играете в фанты? Здесь вы можете найти смешные задания для фантов
      </h1>
    </div>
    <div class="row align-items-center" style="min-height:15rem;">
      <div class="col">
        <button type="button" class="btn btn-primary btn-lg" @click="START_TO_PLAY">Придумать задание для фантов</button>
      </div>
    </div>
    <div class="row fixed-bottom">
      <div class="col">
        <button type="button" class="btn dashed-link">Как играть в фанты?</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'WelcomeMessage',
    mounted: function () {
      let clientId = 'anon';
      if (window['yaCounter56368282'])
        clientId = window['yaCounter56368282'].getClientID();
      this.SET_USER_ID({ id: clientId });
      this.SET_FORFEIT();
    },
    methods: {
      ...mapActions([
        'SET_USER_ID',
        'START_TO_PLAY',
        'SET_FORFEIT',
      ])
    }
  }
//        Здесь, в нашем ящике с желаниями, вы можете найти смешные задания для фантов
//        в веселой компании детей или взрослых
</script>

<style>
.dashed-link {
  color: #fff;
  border-bottom: 1px dashed #fff;
}

#header h1 {
  margin-top:25%;
  font-weight: 300;
  text-align: center;
}
</style>