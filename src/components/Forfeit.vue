<template>
  <div class="container h-100">
    <div class="col">
      <div id="header">
        <h1>
          Как вам такое задание?
        </h1>
      </div>
      <div style="margin-top: 70px; font-size: 25pt;">
        {{ forfeit.text }}
      </div>
      <div style="margin-top: 70px;">
        <button type="button" class="btn btn-success btn-circle"
                @click="SEND_FEEDBACK({id: forfeit.id, feedback: 'like'}); SET_FORFEIT()">
          <v-icon scale=1.8 name="heart"/>
        </button>
        <button type="button" class="btn btn-danger btn-circle"
                @click="SEND_FEEDBACK({id: forfeit.id, feedback: 'dislike'}); SET_FORFEIT()">
          <v-icon scale=1.8 name="heart-broken"/>
        </button>
      </div>
      <div style="margin-top: 70px;" >Кстати, вы можете предложить свое задание и поучаствовать в рейтинге</div>
    </div>
  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'Forfeit',
    components: {
      'v-icon': Icon
    },
    computed: mapState([
      'forfeit',
    ]),
    methods: {
      ...mapActions([
        'SET_FORFEIT',
        'SEND_FEEDBACK',
      ]),
    }
  }
</script>

<style scoped>
.btn-circle {
    width: 60px;
    height: 60px;
    padding: 12px 0px;
    border-radius: 30px;
    margin: 0 30px;
}
</style>