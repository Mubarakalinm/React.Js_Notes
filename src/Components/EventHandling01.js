import { Component } from "react";
import React from "react-dom";

// export default function EventHandle01() {
//   function handle(){
//    console.log("mubarak")

//   }
//   return (
//     <div className="Event">
//       <h1>Hello CodeSandbox</h1>
//       <button onClick={handle}>Hellow</button>
//     </div>
//   );
// }
export default class EventHandle01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "mubarak"
    };
    this.handle = this.handle.bind(this);
  }
  handle() {
    this.setState({
      name: "Javed"
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button onClick={this.handle}>click me</button>
      </div>
    );
  }
}
