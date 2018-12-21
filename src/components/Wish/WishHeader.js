import React from 'react';

class WishHeader extends React.Component {
  render() {
    var isWishSent = this.props.isWishSent;
    var isWishFormInFocus = this.props.isWishFormInFocus;
    var title = this.props.title;

    return (
      <h1 className={'container-header ' + (isWishSent ? 'done ': '') + (isWishFormInFocus ? 'input-focus ': '')}>
      {(isWishSent ? 'Готово' : title )}
      </h1>
    );
  }
}

export default WishHeader;
