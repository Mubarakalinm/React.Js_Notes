import { Component } from "react";
import React from "react-dom";

export default class ParentCompnonent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Mubarak"
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(childName) {
    alert(`hellow ${this.state.parentName} from  ${childName}`);
  }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

function ChildComponent(props) {
  return (
    <div>
      {/* Sending methods as Props to Parent Component */}
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

      {/* Sending methods as Props to Parent Component along with parameter */}
      <button onClick={() => props.greetHandler("childComponent")}>
        Greet Parent
      </button>
    </div>
  );
}
