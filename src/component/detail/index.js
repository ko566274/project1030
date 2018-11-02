import React ,{Component} from "react";
import "./index.scss";
import axios from "axios";
import store from "../../store";

class Detail extends Component{
  constructor(props){
    super(props);
    this.state={
      list:[]
    }
  }
  render(){
    return(<div id="detail">
       detail{this.props.match.params.AIid}
      </div>
    )
  }
  componentDidMount(){
    axios.get("/itemdetail/spuInfos/10395?_=1541140391427").then(res=>{
      console.log(res);
      // console.log(res.data.data.modules[0].moduleContent.banners);
      // this.setState({
      //   list:res[0].productName
        // list2:res.data.data.modules[1].moduleContent.banners,
        // image1:res.data.data.modules[0].moduleContent.background,
        // image2:res.data.data.modules[1].moduleContent.background,       
        
      })
      
    // })
  }    
}


export default Detail;