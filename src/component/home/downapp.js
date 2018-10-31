import React ,{Component} from "react";

import './index.scss'

class Downapp extends Component{
  
  render(){
    return(
      <div id="d_app">
          <div className="cloce" onClick={this.props.event}>&times;</div>
          <div className="logo"></div>
          <div className="msg">
            <h3>尖叫设计APP</h3>
            <p>生活即风格</p>
          </div>
          <div className="goto">立即打开</div>
      </div>
    )
  }
  handleClick(){

  }
}
export default Downapp;