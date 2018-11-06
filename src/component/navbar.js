import React ,{Component} from "react";
import  {NavLink} from "react-router-dom";

import './navbar.scss'
import '../iconfont/iconfont.css'

class Navbar extends Component{
  render(){
    return(
      <div>
        <ul id="foot">
          <li>
            <NavLink to="/home">
              <div className="iconfont icon-daohanglan-03"></div>
              <p>首页</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/genre">
              <div className="iconfont icon-fenlei"></div>
              <p>分类</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/shopcard">
              <div className="iconfont icon-gouwuche"></div>
              <p>购物车</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/msn">
              <div className="iconfont icon-xiaoxi"></div>
              <p>消息</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/msn">
              <div className="iconfont icon-myvip"></div>
              <p>我</p>
            </NavLink>
          </li>
        </ul>



      </div>
    )
  }   
   
}

export default Navbar;