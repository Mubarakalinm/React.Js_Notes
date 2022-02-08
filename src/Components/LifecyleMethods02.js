import React from "react";
export default class LifeCycleB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mubarak"
    };
    console.log("LifeCycleB constructor");
  }
  static getDerviedStateFromProps(props, state) {
    console.log("LifeCycleB getDerviedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleB componentDidMount  ");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(" LifeCycleB shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(" LifeCycleB getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
  }
  render() {
    return <div>LifeCycleB</div>;
  }
}
