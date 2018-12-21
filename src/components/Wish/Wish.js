import axios from 'axios';
import React from 'react';

import './Wish.css';

import WishHeader from './WishHeader';
import DoneMessage from './DoneMessage';
import WishForm from './WishForm';
import WishCounter from './WishCounter';
import TipAccordion from './TipAccordion';


class Wish extends React.Component {

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

  }

  updateWishSentStatus(status) {
    this.setState({wishSent: status});
    if (status)
      this.setState({'wishCount': ++this.state.wishCount});
  }

  updateWishFormFocus(inFocus) {
    this.setState({wishFormInFocus: inFocus});
  }

  loadWishesCounter() {
    var url = 'https://hello.wishbox.space/api/wishes';
//    var url = 'http://127.0.0.1:5000/api/wishes';
    axios.get(url)
      .then(response => {
        console.log(response);
        var count = (response.data.status === 'success' ? response.data.data.count : 0);
        count = (count < 832 ? count + 832 : count);
        this.setState({'wishCount': count});
        })
      .catch(error => {
        console.log(error);
        this.setState({'wishCount': 832});
    });
  }

  componentDidMount() {
    this.loadWishesCounter();
  }

  render() {
    return (
        <div className={this.props.rootDivClassName}>
            <WishHeader
                isWishSent={this.state.wishSent}
                isWishFormInFocus={this.state.wishFormInFocus}
                title={this.props.topTitle}
            />
            <DoneMessage
                isWishSent={this.state.wishSent}
                updateWishSentStatus={this.updateWishSentStatus}
                message={this.props.doneMessage}
            />
            <WishForm
                isWishSent={this.state.wishSent}
                updateWishSentStatus={this.updateWishSentStatus}
                isWishFormInFocus={this.state.wishFormInFocus}
                updateWishFormFocus={this.updateWishFormFocus}
                placeholder={this.props.wishInputPlaceholder}
                wishType={this.props.wishType}
            />
            <WishCounter
                isWishFormInFocus={this.state.wishFormInFocus}
                wishCount={this.state.wishCount}
                recipient={this.props.recipient}
                social={this.props.social}
            />
            <TipAccordion
                isWishFormInFocus={this.state.wishFormInFocus}
                tip={this.props.tip}
            />
        </div>
    );
  }
}

export default Wish;
