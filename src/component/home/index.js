import React ,{Component} from "react";
import  {NavLink} from "react-router-dom";


import Downapp from './downapp.js'
import Navbar from '../navbar.js'

import './index.scss'


class Home extends Component{
  constructor(){
    super();
    this.state = {
      isShow : true
    }
  }
  render(){
    return(
        <div>
          {this.state.isShow?
          <Downapp event={()=>{
            this.setState({
              isShow:!this.state.isShow
            })
          }}/>:null}
          <div className="search">
            <div className="view"></div>
            <div className="s_search">
              <span className="wow_img"></span>
              <input className="u_input" type="text" placeholder="搜索我的尖叫好物"/>
            </div>
          </div>
          <ul className="option">
           <li><NavLink to="/home/tuijian" activeClassName="active">推荐</NavLink></li>
           <li><NavLink to="/home/jiaju" activeClassName="active">家具</NavLink></li>
           <li><NavLink to="/home/jiajuyongpin" activeClassName="active">家居</NavLink></li>
           <li><NavLink to="/home/huodong" activeClassName="active">活动</NavLink></li>
         </ul>
         {
            this.props.children
          }



          <Navbar/>
      </div>
    )
  }   
  handleClick(){
    this.setState({
      isShow:false
    })
  } 
}

export default Home;