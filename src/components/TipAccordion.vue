<template>
  <div class='accordion'>
    <div class='accordion-section'>
      <a href='#tip' :class="['accordion-section-title', titleClassName]" @click="toggleCollapse">
        {{ tip['title'] }}
      </a>
      <div id='tip' :class="['accordion-section-content', textClassName]">
        <component v-bind:is="tip['text']"></component>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tip',
    props: {
      tip: Object,
      isHidden: Boolean
    },
    data() {
      return {
        collapsed: true
      }
    },
    methods: {
      toggleCollapse() { this.collapsed = !this.collapsed }
    },
    computed: {
      titleClassName() { return this.isHidden ? 'hide' : ''},
      textClassName() { return (this.collapsed ? '' : 'active ') + (this.isHidden ? 'hide' : '')}
    }
  }
</script>

<style scoped>
  a,
  a:hover {
    text-decoration: none;
  }

  .accordion-section {
    width: 80%;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 10%;
  }

  .accordion-section-title.hide {
    display: none;
  }

  .accordion-section-title {
    display: inline-block;
    color: #fff;
    border-bottom: 1px dashed #fff;
  }

  .accordion-section-content.hide {
    display: none;
  }

  .accordion-section-content {
    height: auto;
    max-height: 0;
    overflow: hidden;
    margin: 1em 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s, visibility 1s, max-height 1s;
  }

  .accordion-section-content.active {
    max-height: 520px;
    opacity: 1;
    visibility: visible;
  }

  @media screen and (max-width: 600px), (max-height: 400px) {
    .accordion-section {
      width: 100%;
      position: static;
    }

    .accordion-section-title {
      margin-bottom: 20px;
    }

    .accordion-section-content {
      width: 80%;
      margin: 0 auto;
    }

    .accordion-section-content.active {
      padding-bottom: 60px;
    }
  }
</style>