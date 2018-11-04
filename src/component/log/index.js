import React ,{Component} from "react";
import "./sass.scss"
class Log extends Component{
    render(){
        return(
            <div className="box">
                <ul>
                    <li>密码登陆</li>
                    <li>短信登录</li>
                </ul>
                <input/>
                <input />
                <div>确认</div>
            </div>
        )


    }
}

export default Log;