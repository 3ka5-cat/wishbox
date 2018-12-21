import React from 'react';

class SocialShare extends React.Component {
  render() {
    var isHide = this.props.isHide;
    var socialServices= 'vkontakte,facebook,odnoklassniki,twitter,viber,whatsapp,telegram';
    var socialTitle = this.props.social.title;
    var socialText = this.props.social.text;

    return (
        <div className={'ya-share2 ' + (isHide ? 'hide':'')}
          data-services={socialServices}
          data-title={socialTitle}
          data-description={socialText}>
        </div>
    );
  }
}

export default SocialShare;
