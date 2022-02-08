import React from "react";

export default class Form extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userName:'',
      comments:'',
      topic:'React'
    }
  }
  handleUserNameChange=(event)=>{
    this.setState({
      userName:event.target.value
    })
  }
  handleComment=event=>{
    this.setState({
      comments:event.target.value
    })
  }
  handleTopic=event=>{
    this.setState({
      topic:event.target.value
    })
  }
  handleSubmit=event=>{
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
  }
  render(){
    return(
    <form  onSubmit={this.handleSubmit}>
      <div>
      <label>UserName</label>
      <input type='text' value={this.state.userName} onChange={this.handleUserNameChange}></input>
    </div>
    <div>
    <label>Comments</label>
      <textarea type='text' value={this.state.comments} onChange={this.handleComment}></textarea>
    </div>
    <div>
    <label>Topic</label>
      <select value={this.state.topic} onChange={this.handleTopic}>
        <option value='React'>React</option>
        <option value='Angular'>Angular</option>
        <option value='Vue'>Vue</option>
      </select>
    </div>
    <button type='submit'>Submit</button>
    </form>)
  }
}