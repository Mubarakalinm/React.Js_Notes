import { Component } from "react";
import React from "react-dom";

export default class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }
  render() {
    //   let message;
    //   if(this.state.isLoggedIn){
    //     message= <div>Welcome Mubarak</div>
    //   }else{
    //     message= <div>Welcome Javed </div>
    //   }
    //   return message;
    // }
    // return this.state.isLoggedIn ?( <div>Welcome Mubarak</div>)
    // :(<div>Welcome Javed</div>);
    return this.state.isLoggedIn && <div>Mubarak</div>;
  }
}
