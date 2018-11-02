import React ,{Component} from "react";
<<<<<<< HEAD
import Navbar from '../navbar.js'
import "./index.scss";
import {NavLink } from "react-router-dom";
=======
import  {NavLink} from "react-router-dom";


import Downapp from './downapp.js'
import Navbar from '../navbar.js'

import './index.scss'

>>>>>>> 7f30e00adb632402054086a1dd3a50e57a1ee630

class Home extends Component{
  constructor(){
    super();
    this.state = {
      isShow : true
    }
  }
  render(){
    return(
<<<<<<< HEAD
      <div id="home">
        <ul className="homeul">
				<li className="homeli"><NavLink to="/home/tuijian" activeClassName="active">推荐</NavLink></li>
	            <li className="homeli"><NavLink to="/home/jiaju" activeClassName="active">家具</NavLink></li>
	            <li className="homeli"><NavLink to="/home/jiajuyongpin" activeClassName="active">家居</NavLink></li>
	            <li className="homeli"><NavLink to="/home/huodong" activeClassName="active">活动</NavLink></li>
		</ul>
         {
         	this.props.children
         }

=======
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
>>>>>>> 7f30e00adb632402054086a1dd3a50e57a1ee630
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