import axios from 'axios';
import React from 'react';
import ym from 'react-yandex-metrika';
import ReCAPTCHA from 'react-google-recaptcha';

import SendButton from '../SendButton/SendButton';

class WishForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wish: '',
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleWishChange = this.handleWishChange.bind(this);
    this.sendWish = this.sendWish.bind(this);
    this.executeCaptcha = this.executeCaptcha.bind(this);
    this.recaptchaRef = React.createRef();

    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  handleWishChange(e) {
    this.setState({wish: e.target.value});
  }

  handleFocus(e) {
    this.props.updateWishFormFocus(true);
    this.props.wishType ? ym('reachGoal', `INPUT_FOCUS_${this.props.wishType}`) : ym('reachGoal', 'INPUT_FOCUS');
  }

  handleBlur(e) {
    this.props.updateWishFormFocus(false);
  }

  executeCaptcha = function (e) {
    e.preventDefault();
    this.recaptchaRef.current.execute();
  };

  sendWish() {
    this.props.wishType ? ym('reachGoal', `WISH_${this.props.wishType}`) : ym('reachGoal', 'WISH');
    var clientId = 'anon'
    if (window['yaCounter33316388'])
         clientId = window['yaCounter33316388'].getClientID();

    var url = 'https://hello.wishbox.space/api/wishes';
//    var url = 'http://127.0.0.1:5000/api/wishes';

    var reCaptchaResponse = this.recaptchaRef.current.getValue();
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

    this.setState({wish: ''});
    this.props.updateWishSentStatus(true);
    this.recaptchaRef.current.reset();
  }

  render() {
    var isWishSent = this.props.isWishSent;
    var isWishFormInFocus = this.props.isWishFormInFocus;
    var placeholderText = this.props.placeholder;

    return (
        <form className={'container-form ' + (isWishSent ? 'hide': '')} onSubmit={this.executeCaptcha}>
            <input className='container-form-input' type='text' placeholder={placeholderText}
                value={this.state.wish} onChange={this.handleWishChange}
                onFocus={this.handleFocus} onBlur={this.handleBlur}/>
            <ReCAPTCHA
              ref={this.recaptchaRef}
              sitekey='6LfRWDsUAAAAAIDgXusXVA7JmuSbmWlStqLkSFal'
              size='invisible'
              theme='dark'
              onChange={this.sendWish}
            />
            <button className={'container-form-button ' + (isWishFormInFocus ? 'focused':'')}
                disabled={!this.state.wish}>
                <SendButton className='container-form-button-icon'/>
            </button>
        </form>
        );
  }
}

export default WishForm;
