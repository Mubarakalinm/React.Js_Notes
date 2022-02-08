import React from "react";
import LifeCycleB from "./LifecyleMethods02";

export default class LifeCycleA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mubarak"
    };
    console.log("LifeCycleA constructor");
  }
  static getDerviedStateFromProps(props, state) {
    console.log("LifeCycleA getDerviedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(" LifeCycleA shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(" LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "Javed"
    });
  };
  render() {
    return (
      <div>
        LifeCycleA
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    );
  }
}
