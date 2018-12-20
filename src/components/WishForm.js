import axios from "axios";
import React from "react";

import SendButton from "../components/SendButton.js";

class WishForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wish: "",
    };

    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleWishChange = this.handleWishChange.bind(this)
    window.sendWish = this.sendWish = this.sendWish.bind(this)

    axios.defaults.headers.post["Content-Type"] = "application/json";
  }

  handleWishChange(e) {
    this.setState({wish: e.target.value});
  }

  handleFocus(e) {
    this.props.updateWishFormFocus(true);
  }

  handleBlur(e) {
    this.props.updateWishFormFocus(false);
  }

  sendWish(reCaptchaResponse) {
    yaCounter33316388.reachGoal("WISH");
    var clientId = yaCounter33316388.getClientID();
    var url = "https://hello.wishbox.space/api/wishes";
//    var url = "http://127.0.0.1:5000/api/wishes";

    axios.post(url, {
      text: this.state.wish,
      external_user_id: clientId,
      recaptcha_token: reCaptchaResponse,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    this.setState({wish: ""});
    this.props.updateWishSentStatus(true);
    grecaptcha.reset();
  }

  render() {
    var isWishSent = this.props.isWishSent;
    var isWishFormInFocus = this.props.isWishFormInFocus;
    var placeholderText = this.props.placeholder;

    return (
        <form className={"container-form " + (isWishSent ? "hide": "")}>
            <input className="container-form-input" type="text" placeholder={placeholderText}
                value={this.state.wish} onChange={this.handleWishChange}
                onFocus={this.handleFocus} onBlur={this.handleBlur}/>
            <button className={"container-form-button g-recaptcha " + (isWishFormInFocus ? "focused":"")}
                disabled={!this.state.wish} data-theme="dark" data-sitekey="6LfRWDsUAAAAAIDgXusXVA7JmuSbmWlStqLkSFal"
                data-callback="sendWish">
                <SendButton className="container-form-button-icon"/>
            </button>
        </form>
        );
  }
}

export default WishForm;
