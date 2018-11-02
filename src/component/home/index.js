import React ,{Component} from "react";
import Navbar from '../navbar.js'
import "./index.scss";
import {NavLink } from "react-router-dom";

class Home extends Component{
  render(){
    return(
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

      </div>
    )
  }   
   
}

export default Home;