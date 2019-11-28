<template>
  <span>
    Все очень просто. Под новый год нужно мечтать широко и загадывать самое заветное!
    А чтобы Дед Мороз не ошибся, сформулируй желание очень-очень конкретно, в позитивной формулировке
    (без всяких 'не'), запиши в окошко вверху, и нажми кнопку <SendButton/>. Все!
    Дедушка Мороз позаботится о твоих желаниях.
  </span>
</template>

<script>
  import SendButton from './SendButton'

  export default {
    name: 'StandardTip',
    components: {
      SendButton
    }
  }
</script>

<style scoped>

</style>