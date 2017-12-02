import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class WishHeader extends React.Component {
  render() {
    var isWishSent = this.props.isWishSent;
    var isWishFormInFocus = this.props.isWishFormInFocus;

    return (
      <h1 className={"container-header " + (isWishSent ? "done ": "") + (isWishFormInFocus ? "input-focus ": "")}>
      {(isWishSent ? "Готово" : "Хочу, чтобы...")}
      </h1>
    );
  }
}

class DoneMessage extends React.Component {
  sendAgain(e) {
    e.preventDefault();
    this.props.updateWishSentStatus(false);
  }

  render() {
    var isWishSent = this.props.isWishSent;

    return (
      <div className={"container-done-msg " + (isWishSent ? "": "hide")}>
        <p>Запрос ушел Космосу, теперь осталось расслабиться и перестань об этом думать. Все будет хорошо!</p>
        <a href="#" className={"link "  + (isWishSent ? "": "hide")} id="again"
          onClick={this.sendAgain.bind(this)}>Но лучше загадать еще одно желание</a>
      </div>
    )
  }
}

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
  }

  render() {
    var isWishSent = this.props.isWishSent;
    var isWishFormInFocus = this.props.isWishFormInFocus;
    return (
        <form className={"container-form " + (isWishSent ? "hide": "")}>
            <input className="container-form-input" type="text" placeholder="... формулируй, космос ждет"
                value={this.state.wish} onChange={this.handleWishChange}
                onFocus={this.handleFocus} onBlur={this.handleBlur}/>
            <button className={"container-form-button g-recaptcha " + (isWishFormInFocus ? "focused":"")}
                disabled={!this.state.wish} data-theme="dark" data-sitekey="6LfRWDsUAAAAAIDgXusXVA7JmuSbmWlStqLkSFal"
                data-callback="sendWish">
                <svg className="container-form-button-icon" height="32" viewBox="0 0 64 64"
                     width="32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.964 8.127H16.036c-4.4 0-8 3.6-8 8v20.977c0 4.4 3.6 8 8
                    8h7.397v10.768l13.333-10.768h11.197c4.4 0 8-3.6 8-8V16.127c0-4.4-3.6-8-8-8zm3
                    28.977c0 1.626-1.374 3-3 3H35l-1.375 1.11-5.19 4.193v-5.303H16.036c-1.626
                    0-3-1.374-3-3V16.127c0-1.626 1.374-3 3-3h31.928c1.626 0 3 1.374 3 3v20.977z"></path>
                        <circle cx="21.743" cy="26.617" r="2.913"></circle>
                        <circle cx="32" cy="26.617" r="2.913"></circle>
                        <circle cx="42.256" cy="26.617" r="2.913"></circle>
                </svg>
            </button>
        </form>
        );
  }
}

class WishCounter extends React.Component {
  render() {
    var isWishFormInFocus = this.props.isWishFormInFocus;

    return (
      <div className={"container-counter " + (isWishFormInFocus ? "hide":"")}>
        <p>Вселенная позаботилась уже о <strong>{this.props.wishCount}</strong> запросах</p>
        <p>Если рассказать об этом друзьям, счастливых людей станет больше</p>

        <div className={"ya-share2 " + (isWishFormInFocus ? "hide":"")}
          data-services="vkontakte,facebook,odnoklassniki,twitter,viber,whatsapp,telegram"
          data-title="Расскажите Космосу о своей мечте"
          data-description="Как сделать так, чтобы заветное желание исполнилось? Попросить об этом Космос!">
        </div>
      </div>
    );
  }
}

class TipAccordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    };

    this.uncollapse = this.uncollapse.bind(this)
  }

  uncollapse(e) {
    e.preventDefault();
    this.setState({collapsed: !this.state.collapsed});
  }

  render() {
    var isWishFormInFocus = this.props.isWishFormInFocus;

    return (
      <div className="accordion">
        <div className="accordion-section">
          <a href="#tip" className={"accordion-section-title " + (isWishFormInFocus ? "hide":"")}
            onClick={this.uncollapse}>Что здесь происходит?</a>
          <div id="tip"
            className={"accordion-section-content " + (this.state.collapsed ? "" : "active ") + (isWishFormInFocus ? "hide ": "")}>
            "Хочу, хочу, хочу!". Мы постоянно загадываем желания.
            Трем носы и пальцы городским достопримечательностям, портим праздничное шампанское, ловим "22:22"
            на часах. А они, заветные, все не сбываются. Что делать и как с этим бороться? Очень просто.
            Перестать на них фокусироваться. Отправить запрос и заниматься своими делами.
            Он обязательно дойдет куда надо и запишется на исполнение. Для этого всего лишь нужно
            сформулировать его очень-очень конкретно, в позитивной формулировке (без всяких "не"),
            записать в окошко сверху, нажать кнопку <svg height="16" viewBox="0 0 64 64" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.964 8.127H16.036c-4.4 0-8 3.6-8 8v20.977c0
                4.4 3.6 8 8 8h7.397v10.768l13.333-10.768h11.197c4.4 0 8-3.6 8-8V16.127c0-4.4-3.6-8-8-8zm3
                28.977c0 1.626-1.374 3-3 3H35l-1.375 1.11-5.19
                4.193v-5.303H16.036c-1.626 0-3-1.374-3-3V16.127c0-1.626 1.374-3
                3-3h31.928c1.626 0 3 1.374 3 3v20.977z"></path>
              <circle cx="21.743" cy="26.617" r="2.913"></circle>
              <circle cx="32" cy="26.617" r="2.913"></circle>
              <circle cx="42.256" cy="26.617" r="2.913"></circle>
              </svg> и <em>забыть</em>. Космос позаботится о Ваших желаниях. <span>Он уже начал.</span></div>
        </div>
      </div>
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wishFormInFocus: false,
      wishSent: false,
      wishCount: 0,
    };
    this.updateWishFormFocus = this.updateWishFormFocus.bind(this)
    this.updateWishSentStatus = this.updateWishSentStatus.bind(this)
    this.loadWishesCounter = this.loadWishesCounter.bind(this)

    axios.defaults.headers.post["Content-Type"] = "application/json";
  }

  updateWishSentStatus(status) {
    this.setState({wishSent: status});
    if (status)
      this.setState({"wishCount": ++this.state.wishCount});
  }

  updateWishFormFocus(inFocus) {
    this.setState({wishFormInFocus: inFocus});
  }

  loadWishesCounter() {
    var url = "https://hello.wishbox.space/api/wishes";
//    var url = "http://127.0.0.1:5000/api/wishes";
    axios.get(url)
      .then(response => {
        console.log(response);
        var count = (response.data.status == "success" ? response.data.data.count : 0);
        count = (count < 832 ? count + 832 : count);
        this.setState({"wishCount": count});
        })
      .catch(error => {
        console.log(error);
        this.setState({"wishCount": 832});
    });
  }

  componentDidMount() {
    this.loadWishesCounter();
  }

  render() {
    return (
      <div className="app container">
        <WishHeader isWishSent={this.state.wishSent} isWishFormInFocus={this.state.wishFormInFocus}/>
        <DoneMessage isWishSent={this.state.wishSent} updateWishSentStatus={this.updateWishSentStatus}/>
        <WishForm isWishSent={this.state.wishSent} updateWishSentStatus={this.updateWishSentStatus}
            isWishFormInFocus={this.state.wishFormInFocus} updateWishFormFocus={this.updateWishFormFocus} />
        <WishCounter wishCount={this.state.wishCount} isWishFormInFocus={this.state.wishFormInFocus} />
        <TipAccordion isWishFormInFocus={this.state.wishFormInFocus}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
