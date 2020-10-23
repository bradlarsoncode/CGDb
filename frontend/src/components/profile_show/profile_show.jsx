import React from "react";
export default class ProfileShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.currentUser)

       let {currentUser} = this.props
        return (
            <div className="profile-class">
                <p> Name: {currentUser.name}</p>
                <p> Email: {currentUser.email}</p>
                <p> Playthrough: {currentUser.playthrough}</p>
                <p> Progress: {currentUser.progress}</p>
                <p> Sanity: {currentUser.sanity}</p>
            </div>
        )

    }
}