<template>
  <div :class="['container wish', rootDivClassName]">
    <WishHeader
      :isWishFormInFocus="wishFormInFocus"
      :isWishSent="wishSent"
      :title="title"
    />
    <DoneMessage
        :isWishSent="wishSent"
        :messages="doneMessages"
    />
    <WishForm
      :placeholder="inputPlaceholder"
      :isWishSent="wishSent"
      :ymGoalPrefix="wishType"
      recaptchaSiteKey="6LfRWDsUAAAAAIDgXusXVA7JmuSbmWlStqLkSFal"
    />
    <WishCounter
      :isWishFormInFocus="wishFormInFocus"
      :recipient="recipient"
      :wishCount="wishCount"
      :social="social"
    />
    <TipAccordion
        :isWishFormInFocus="wishFormInFocus"
        :tip="tip"
    />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import DoneMessage from './DoneMessage'
  import NewYearTip from './NewYearTip'
  import StandardTip from './StandardTip'
  import TipAccordion from './TipAccordion'
  import WishCounter from './WishCounter'
  import WishForm from './WishForm'
  import WishHeader from './WishHeader'

  export default {
    name: 'Wish',
    components: {
      DoneMessage,
      TipAccordion,
      WishCounter,
      WishHeader,
      WishForm,
    },
    props: {
      wishType: {
        type: String,
        default: '',
      },
    },
    computed: {
      doneMessages () {
        let standardMessage = {
          done: 'Запрос ушел Космосу, теперь осталось расслабиться и перестань об этом думать. Все будет хорошо!',
          again: 'Но лучше загадать еще одно желание',
        }
        let nyMessage = {
          done: 'Желание ушло Деду Морозу. Продолжай хорошо себя вести и оно обязательно сбудется! А если ты весь год был хорошим мальчиком или девочкой, ',
          again: 'можешь загадать еще одно.',
        }
        return this.wishType === 'ny' ? nyMessage : standardMessage
      },
      inputPlaceholder () { return this.wishType === 'ny' ? '... формулируй, дедушка ждет' : '... формулируй, космос ждет' },
      social() {
        let standardSocial = {
          title: 'Расскажите Космосу о своей мечте',
          text: 'Как сделать так, чтобы заветное желание исполнилось? Попросить об этом Космос!',
        }
        let nySocial = {
          title: 'Расскажите Деду Морозу о своем желании',
          text: 'Как исполнить желание на Новый год? Попросить об этом Деда Мороза!',
        }
        return this.wishType === 'ny' ? nySocial : standardSocial
      },
      title () { return this.wishType === 'ny' ? 'Дорогой Дедушка Мороз, ...' : 'Хочу, чтобы...' },
      tip () {
        let standardTip = {
          title: 'Что здесь происходит?',
          text: StandardTip,
        }
        let nyTip = {
          title: 'Как загадать желание на Новый год?',
          text: NewYearTip,
        }
        return this.wishType === 'ny' ? nyTip : standardTip
      },
      recipient () { return this.wishType === 'ny' ? 'Дед Мороз' : 'Космос' },
      rootDivClassName () { return this.wishType === 'ny' ? 'new-year' : ''},
      ...mapState([
        'wishCount',
        'wishFormInFocus',
        'wishSent'
      ])
    }
  }
</script>

<style scoped>
  .wish {
    background: #00001b url(../assets/wish_bg.min.jpg) no-repeat scroll 0 0;
    height: 100%;
    background-size: cover;
  }
  .wish.new-year {
    background: #00001b url(../assets/bg_ny.min.jpg) no-repeat scroll 0 -350px;
    height: 100%;
    background-size: cover;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: height 0.5s;
    max-width: 100%;
  }
  @media screen and (max-width: 600px), (max-height: 400px) {
    .container {
      height: 100%;
      position: relative;
    }

    .wish.new-year {
      background: #00001b url(../assets/bg_ny.min.jpg) no-repeat scroll 0 0;
      height: 100%;
      background-size: cover;
    }
  }
</style>