import React from "react";
export default class ProfileShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

       let {currentUser} = this.props
       if (currentUser) {
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
}