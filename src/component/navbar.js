import React ,{Component} from "react";
<<<<<<< HEAD
class Navbar extends Component{
  render(){
    return(
      <input type="text" placeholder="搜索我的尖叫好物"/>
=======
import  {NavLink} from "react-router-dom";

import './navbar.scss'
import '../iconfont/iconfont.css'

class Genre extends Component{
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
>>>>>>> 7f30e00adb632402054086a1dd3a50e57a1ee630
    )
  }   
   
}

export default Navbar;