import React from 'react';

class SendButton extends React.Component {
    render() {
        var className = this.props.className;

        return (
            <svg className={className} height='32' viewBox='0 0 64 64' width='32' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M47.964 8.127H16.036c-4.4 0-8 3.6-8 8v20.977c0 4.4 3.6 8 8
                        8h7.397v10.768l13.333-10.768h11.197c4.4 0 8-3.6 8-8V16.127c0-4.4-3.6-8-8-8zm3
                        28.977c0 1.626-1.374 3-3 3H35l-1.375 1.11-5.19 4.193v-5.303H16.036c-1.626
                        0-3-1.374-3-3V16.127c0-1.626 1.374-3 3-3h31.928c1.626 0 3 1.374 3 3v20.977z'>
                    </path>
                    <circle cx='21.743' cy='26.617' r='2.913'></circle>
                    <circle cx='32' cy='26.617' r='2.913'></circle>
                    <circle cx='42.256' cy='26.617' r='2.913'></circle>
            </svg>
        );
    }
}

export default SendButton;
