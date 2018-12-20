import React from "react";

import SocialShare from "../components/SocialShare.js";

class WishCounter extends React.Component {
  render() {
    var isWishFormInFocus = this.props.isWishFormInFocus;

    return (
      <div className={"container-counter " + (isWishFormInFocus ? "hide":"")}>
        <p>{this.props.recipient} уже позаботился о <strong>{this.props.wishCount}</strong> запросах</p>
        <p>Если рассказать об этом друзьям, счастливых людей станет больше</p>
        <SocialShare social={this.props.social} isHide={isWishFormInFocus} />
      </div>
    );
  }
}

export default WishCounter;
