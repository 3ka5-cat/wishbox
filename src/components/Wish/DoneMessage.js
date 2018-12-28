import React from 'react';

import Banner from './Banner';

class DoneMessage extends React.Component {
  sendAgain(e) {
    e.preventDefault();
    this.props.updateWishSentStatus(false);
  }

  render() {
    var isWishSent = this.props.isWishSent;
    var doneText = this.props.message.done;
    var againText = this.props.message.again;

    return (
      <div className={'container-done-msg ' + (isWishSent ? '': 'hide')}>
        <p>{doneText}</p>
        <a href='#' className={'link '  + (isWishSent ? '': 'hide')} id='again'
          onClick={this.sendAgain.bind(this)}>{againText}</a>
        <Banner isShown={isWishSent} />
      </div>
    )
  }
}

export default DoneMessage;
