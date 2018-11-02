import React ,{Component} from "react";
import "./index.scss";
import axios from "axios";
import store from "../../store";

class Genre extends Component{
  constructor(props){
    super(props);
    this.state={
      list:[],
      list2:[],
      image1:'',
      image2:'',
      image3:'',
      
    }
  }
  render(){
    return(<div id="fenlei">
       <input class="topInput" type="text" placeholder="搜索我的尖叫好物"/>
       <div class="image1" style={{backgroundImage:'url('+ this.state.image1 +')'}}></div>
       <ul>{this.state.list.map((item,index)=>
          <li key={item.bannerLinkTargetId} onClick={this.handleClick.bind(this,item.bannerLinkTargetId,index)}>
              {item.bannerTitle}<span>></span>
          </li>)}
        </ul>
       <div class="image2" style={{backgroundImage:'url('+ this.state.image2 +')'}}></div>
       <ul>{this.state.list2.map((item,index)=>
          <li key={item.bannerLinkTargetId} onClick={this.handle2TClick.bind(this,item.bannerLinkTargetId,index)}>
              {item.bannerTitle}<span>></span>
          </li>)}
        </ul>
      </div>
    )
  }

  handleClick(id,index){
    
    this.props.history.push("/product/"+id) 
    
    store.dispatch({
      type:"changetitle",
      payload:this.state.list[index]
  })
  }
  handle2TClick(id,index){
    // console.log(this.props.history)
   this.props.history.push("/product/"+id) 

   store.dispatch({
    type:"changetitle",
    payload:this.state.list2[index]
  })
  }

  componentDidMount(){
    axios.get("/v2/page?pageId=5&tabId=1&_=1540897417681").then(res=>{
      // console.log(res);
      // console.log(res.data.data.modules[0].moduleContent.banners);
      this.setState({
        list:res.data.data.modules[0].moduleContent.banners,
        list2:res.data.data.modules[1].moduleContent.banners,
        image1:res.data.data.modules[0].moduleContent.background,
        image2:res.data.data.modules[1].moduleContent.background,       
        
      })
      
    })
  }    
}


export default Genre;