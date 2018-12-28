import React from 'react';

class Banner extends React.Component {
  render() {
    var isShown = this.props.isShown;

    return (
      <span className={'banner-done ' + (isShown ? '': 'hide')}>
        <a href="http://astro7.ru/landing/gadaniya-besplatno/?partner=5c17efd7806fa&amp;pb=ec7ac628" target="_top">
            <img src="//affiliate.teleastro.ru/accounts/default1/7obnyw0/ec7ac628.gif"
              alt="" title="" width="240" height="220" />
        </a>
        <img style={{ border: 0 }} src="https://affiliate.teleastro.ru/scripts/7oinyw0?partner=5c17efd7806fa&amp;pb=ec7ac628"
          width="1" height="1" alt="" />
      </span>
    );
  }
}

export default Banner;
