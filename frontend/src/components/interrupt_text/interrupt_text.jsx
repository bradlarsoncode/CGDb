import React from 'react';
import * as Text from '../../assets/text'
import "./interrupt_text.scss";

class InterruptText extends React.Component {

    render() {
        let scaryText
        switch (1) { //TODO
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
        console.log(this.props)
        return (
            <div>
                {scaryText}
            </div>
        )
    }
}

export default InterruptText;