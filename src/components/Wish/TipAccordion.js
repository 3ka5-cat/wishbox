import React from 'react';
import ym from 'react-yandex-metrika';

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
    this.props.wishType ? ym('reachGoal', `TIP_${this.props.wishType}`) : ym('reachGoal', 'TIP');
  }

  render() {
    var isWishFormInFocus = this.props.isWishFormInFocus;
    var tipText = this.props.tip.text;
    var tipTitle = this.props.tip.title;

    return (
      <div className='accordion'>
        <div className='accordion-section'>
          <a href='#tip' className={'accordion-section-title ' + (isWishFormInFocus ? 'hide':'')}
            onClick={this.uncollapse}>{tipTitle}</a>
          <div id='tip'
            className={'accordion-section-content ' + (this.state.collapsed ? '' : 'active ') + (isWishFormInFocus ? 'hide ': '')}>
            {tipText}
          </div>
        </div>
      </div>
    );
  }
}

export default TipAccordion;
