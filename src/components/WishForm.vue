<template>
  <form :class="['container-form', formClassName]" @submit.prevent="executeCaptcha">
    <input
      class="container-form-input"
      type="text"
      :placeholder="placeholder"
      :value="wishText"
      @change="handleWishChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <vue-recaptcha
        ref="recaptcha"
        size="invisible"
        theme="dark"
        :sitekey="recaptchaSiteKey"
        @verify="sendWish"
        @expired="onCaptchaExpired"
    />
    <button
      :class="['container-form-button', buttonClassName]"
      :disabled="!wishText"
    >
      <SendButton className="container-form-button-icon"/>
    </button>
  </form>
</template>

<script>
  import axios from 'axios'
  import { mapState, mapActions } from 'vuex'
  import VueRecaptcha from 'vue-recaptcha'
  import SendButton from './SendButton'

  const wishesUrl = 'https://hello.wishbox.space/api/wishes'

  export default {
    name: 'WishForm',
    props: {
      placeholder: String,
      isWishSent: Boolean,
      ymGoalPrefix: String,
      recaptchaSiteKey: String,
    },
    components: {
      SendButton,
      VueRecaptcha
    },
    computed: {
      formClassName() { return this.isWishSent ? 'hide' : ''},
      buttonClassName() { return this.isWishFormInFocus ? 'focused' : ''},
      ...mapState([
        'userId',
        'wishText',
      ])
    },
    methods: {
      executeCaptcha () {
        this.$refs.recaptcha.execute()
      },
      handleBlur () {
        this.SET_WISH_FORM_FOCUS({ inFocus: false })
      },
      handleFocus () {
        this.SET_WISH_FORM_FOCUS({ inFocus: true })
        let goal = this.ymGoalPrefix ? `${this.ymGoalPrefix}_INPUT_FOCUS` : 'INPUT_FOCUS'
        window['yaCounter33316388'].reachGoal(goal)
      },
      handleWishChange(e) {
        this.SET_WISH_TEXT({text: e.target.value})
      },
      onCaptchaExpired () {
        this.$refs.recaptcha.reset()
      },
      sendWish(recaptchaResponse) {
        let clientId = 'anon';
        if (window['yaCounter33316388']) {
          let goal = this.ymGoalPrefix ? `${this.ymGoalPrefix}_WISH` : 'WISH'
          window['yaCounter33316388'].reachGoal(goal)
          clientId = window['yaCounter33316388'].getClientID()
        }
        this.SET_USER_ID({ id: clientId });

        axios.post(wishesUrl, {
          text: this.text,
          external_user_id: this.userId,
          recaptcha_token: recaptchaResponse,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

        this.SET_WISH_SENT({ isSent: true })
        this.SET_WISH_TEXT({ text: '' })
      },
      ...mapActions([
        'SET_USER_ID',
        'SET_WISH_FORM_FOCUS',
        'SET_WISH_TEXT',
        'SET_WISH_SENT'
      ]),
    }
  }
</script>

<style scoped>
  .container-form {
    display: block;
    width: 80%;
    position: relative;
  }

  .container-form.hide {
    display: none;
  }

  .container-form-input {
    display: block;
    color: #122E62;
    background: rgba(255, 255, 255, 0.60);
    border: 0;
    border-radius: 1.5rem;
    height: 3rem;
    width: calc(100% - 4rem);
    font-size: 2em;
    line-height: 2.5rem;
    text-align: center;
    margin: 0;
    padding: 0 3.5rem 0 0.5rem;
    transition: all 0.25s;
  }

  .container-form-input:focus {
    box-shadow: -5px 0 20px #fff, 0 -5px 20px #fff, 5px 0 20px #fff, 5px 0 20px #fff, -5px 5px 20px #fff, 5px 5px 20px #fff;
    outline: none;
  }

  .container-form-button {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    margin: 0;
    border: none;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }

  input::-webkit-input-placeholder {
    color: #122E62;
    font-size: 75%;
    line-height: 2em;
    font-weight: 300;
    transition: all 0.5s;
  }

  input::-moz-placeholder {
    color: #122E62;
    font-size: 75%;
    line-height: 2em;
    font-weight: 300;
    transition: all 0.5s;
  }

  input::-ms-input-placeholder {
    color: #122E62;
    font-size: 75%;
    line-height: 2em;
    font-weight: 300;
    transition: all 0.5s;
  }

  input:focus::-webkit-input-placeholder {
    color: transparent;
  }

  input:focus::-moz-placeholder {
    color: transparent;
  }

  input:focus::-ms-input-placeholder {
    color: transparent;
  }

  @media screen and (max-width: 600px), (max-height: 400px) {
    .container-form-input {
      font-size: 1.5em;
    }

    input::-webkit-input-placeholder {
      color: #122E62;
      font-size: 55%;
      line-height: 3.2em;
      font-weight: 400;
      transition: all 0.5s;
    }

    input::-moz-placeholder {
      color: #122E62;
      font-size: 55%;
      line-height: 3.2em;
      font-weight: 400;
      transition: all 0.5s;
    }
  }
</style>