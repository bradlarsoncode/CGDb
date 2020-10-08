import React from 'react';
import * as Text from '../../assets/text'

class InterruptText extends React.Component {

    render() {
        let scaryText
        switch (this.props.progress) {
            case 1:
                scaryText = Text.stare();
                break;
            case 2:
                scaryText = Text.amps();
                break;
            case 3:
                scaryText = Text.pennies();
                break;
            case 4:
                scaryText = Text.balloon();
                break;
            case 5:
                scaryText = Text.shadow();
                break;
            default:
        }
        // console.log(this.props.progress)
        return (
            <div className='interrupt-text-container'>
                {scaryText}
            </div>
        )
    }
}

export default InterruptText;