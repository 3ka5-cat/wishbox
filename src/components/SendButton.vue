<template>
  <svg :class=className height='32' viewBox='0 0 64 64' width='32' xmlns='http://www.w3.org/2000/svg'>
    <path d='M47.964 8.127H16.036c-4.4 0-8 3.6-8 8v20.977c0 4.4 3.6 8 8
                        8h7.397v10.768l13.333-10.768h11.197c4.4 0 8-3.6 8-8V16.127c0-4.4-3.6-8-8-8zm3
                        28.977c0 1.626-1.374 3-3 3H35l-1.375 1.11-5.19 4.193v-5.303H16.036c-1.626
                        0-3-1.374-3-3V16.127c0-1.626 1.374-3 3-3h31.928c1.626 0 3 1.374 3 3v20.977z'>
    </path>
    <circle cx='21.743' cy='26.617' r='2.913'></circle>
    <circle cx='32' cy='26.617' r='2.913'></circle>
    <circle cx='42.256' cy='26.617' r='2.913'></circle>
  </svg>
</template>

<script>
  export default {
    name: 'SendButton',
    props: {
      className: String
    },
  }
</script>

<style scoped>
  .accordion-section-content svg {
    vertical-align: bottom;
    width: 16px;
    height: 16px
  }

  .accordion-section-content svg > * {
    fill: #fff;
  }

  .accordion-section-content span {
    display: block;
    padding-bottom: 20px;
  }



  .container-form-button:focus {
    outline: none;
  }

  .container-form-button-icon {
    display: block;
    margin: 0 auto;
    text-align: center;
  }

  .container-form-button-icon > * {
    fill: #fff;
  }

  .container-form-button:hover .container-form-button-icon > *,
  .container-form-button.focused .container-form-button-icon > * {
    fill: #122E62;
  }
</style>