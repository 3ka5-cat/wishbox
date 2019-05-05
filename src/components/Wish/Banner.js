import React from 'react';

class Banner extends React.Component {
  appendYaRTB() {
      const yaScript = document.createElement('script');
      yaScript.setAttribute('type', 'text/javascript');
      yaScript.innerHTML = `(function(w, d, n, s, t) {
            w[n] = w[n] || [];
            w[n].push(function() {
                Ya.Context.AdvManager.render({
                    blockId: "R-A-292666-1",
                    renderTo: "yandex_rtb_R-A-292666-1",
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

      document.head.appendChild(yaScript);
  }

  render() {
    var isShown = this.props.isShown;
    this.appendYaRTB();

    return (
      <span className={'banner-done ' + (isShown ? '': 'hide')}>
        <div id="yandex_rtb_R-A-292666-1"></div>
      </span>
    );
  }
}

export default Banner;
