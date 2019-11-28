<template>
  <span :class="['banner-done', className]">
    <div :id="bannerId"></div>
  </span>
</template>

<script>
  export default {
    name: 'Banner',
    props: {
      isShown: Boolean,
      rtbId: String,
      rtbBlockId: String,
    },
    mounted () {
      if (this.rtbBlockId) {
        const yaScript = document.createElement('script')
        yaScript.setAttribute('type', 'text/javascript')
        yaScript.innerHTML = `(function(w, d, n, s, t) {
          w[n] = w[n] || [];
          w[n].push(function() {
              Ya.Context.AdvManager.render({
                  blockId: "${this.rtbBlockId}",
                  renderTo: "${this.rtbId}",
                  async: true
              });
          });
          t = d.getElementsByTagName("script")[0];
          s = d.createElement("script");
          s.type = "text/javascript";
          s.src = "//an.yandex.ru/system/context.js";
          s.async = true;
          t.parentNode.insertBefore(s, t);
        })(this, this.document, "yandexContextAsyncCallbacks");`

        document.head.appendChild(yaScript)
      }
    },
    computed: {
      className () { return this.isShown ? '' : 'hide' },
      bannerId () { return this.isShown ? this.rtbId : '' }
    }
  }
</script>

<style scoped>
  .banner-done {
    display: block;
    margin-top: 30px;
    max-width: 60%;
    max-height: 60%;
    margin-left:auto;
    margin-right:auto;
  }

  .banner-done.hide {
    display: none;
  }
</style>