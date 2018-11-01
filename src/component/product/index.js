import React ,{Component} from "react";
import "./index.scss";
import axios from "axios";
import NewPrice from './newPrice';
import NewProduct from './newProduct';
import Selling from './selling';
import store from "../../store";

class Product extends Component{
  constructor(props){
    super(props);
    this.state={
      title:store.getState().bannerTitle
    };
    
  }
  render(){
    return(<div id="lieBiao">
      <div className="title">
        <div className="left">主页</div>
        <span>{this.state.title}</span>
        <div className="right">分类</div>
      </div>
      




       product{this.props.match.params.KGid}
       <NewPrice/>
       <NewProduct/>
       <Selling/>
    </div>
    )
  } 
  componentWillMount(){
    store.subscribe(()=>{
      this.setState({
        title:store.getState()
      })
    })
  }
  componentDidMount(){
    axios.get(`/pages/category/${this.props.match.params.KGid}?pageNumber=1&orderBy=onShelfTime&sort=desc&_=1540974558680`).then(res=>{
      // console.log(this.props.match.params.KGid);    
      })
  }
}

export default Product;
