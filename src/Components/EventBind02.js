import { Component } from "react";
import React from "react-dom";

export default class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handle = this.handle.bind(this);
  }
  handle() {
    this.setState({
      count: this.state.count + 1
    });
  }
  // handle=()=>{
  //   this.setState({
  //         count:this.state.count+1
  //       })
  // }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        {/* <button onClick={this.handle.bind(this)}>click me</button> */}
        {/* <button onClick={()=> this.handle()}>click me</button> */}
        <button onClick={this.handle}>click me</button>
      </div>
    );
  }
}
