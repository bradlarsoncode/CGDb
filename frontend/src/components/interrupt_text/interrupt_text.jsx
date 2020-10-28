import React from 'react';
import * as Text from '../../assets/text'
import "./interrupt_text.scss";

class InterruptText extends React.Component {

    render() {
        let scaryText
        switch (this.props.currentUser.progress) { //TODO
            case 0:
                scaryText = Text.stare();
                break;
            case 1:
                scaryText = Text.amps();
                break;
            case 2:
                scaryText = Text.pennies();
                break;
            case 3:
                scaryText = Text.balloon();
                break;
            case 4:
                scaryText = Text.shadow();
                break;
            case 5:
                scaryText = Text.steps();
                break;
             case 6:
                scaryText = Text.skin();
                break;
            default:
                scaryText = Text.filler();
        }
        // console.log(this.props.currentUser.progress)
        return (
            <div>
                {scaryText}
            </div>
        )
    }
}

export default InterruptText;