import React ,{Component} from "react";
import "./index.scss";
import axios from "axios";
import store from "../../store";
class Product extends Component{
  constructor(props){
    super(props);
    this.state={
      title:store.getState().bannerTitle,
      list:[],
      shunxu:'asc'
    };
  }
  render(){
    return(<div id="lieBiao">
      <div className="title">
        <div className="left">主页</div>
        <span>{this.state.title}</span>
        <div className="right">分类</div>
      </div>

      <div class="swape">
          {this.props.match.params.KGid}    
      </div>

      <ul className="mulu">   
        <li onClick={this.handleNewClick.bind(this)}>上新</li>
        <li onClick={this.handleSellClick.bind(this)}>销量</li>
        <li onClick={this.handlePriceClick.bind(this)}>价格</li>
      </ul>
      
      <div className="hold">{this.state.list.map((item,index)=>
          <div className="single" key={item.parentProductId} onClick={this.handleDetailClick.bind(this,item.parentProductId,index)}>
              <img src={item.productImg}/>
              <p>{item.productName}</p>
              <p>{item.sellPrice}</p>
              <p>{item.prizeOrSlogan}</p>
          </div>)}
      </div>
    </div>
    ) 
  } 
  handleDetailClick(id,index){
    
    this.props.history.push("/detail/"+id) 
    store.dispatch({
      type:"changetitle",
      payload:this.state.list[index]
  })
  }




  handleNewClick(){
    axios.get(`/pages/category/${this.props.match.params.KGid}?pageNumber=1&orderBy=onShelfTime&sort=desc&_=1540974558680`).then(res=>{
      this.setState({
        list:res.data.data.products
      })    
  })
  }
  handleSellClick(){
    axios.get(`/pages/category/${this.props.match.params.KGid}?pageNumber=1&orderBy=sales&sort=desc&_=1541123824700`).then(res=>{
      this.setState({
        list:res.data.data.products
      })    
  })
  }
  handlePriceClick(){
    this.state.shunxu === 'desc'?axios.get(`/pages/category/${this.props.match.params.KGid}?pageNumber=1&orderBy=price&sort=${this.state.shunxu}&_=1541123846502`).then(res=>{
      this.setState({
        list:res.data.data.products,
        shunxu:'asc'
      }) 
    })
    :this.setState({shunxu:'desc'})
     axios.get(`/pages/category/${this.props.match.params.KGid}?pageNumber=1&orderBy=price&sort=${this.state.shunxu}&_=1541123846502`).then(res=>{
       this.setState({
         list:res.data.data.products
       }) 
     })
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
      // console.log(res.data.data.products);  
      this.setState({
        list:res.data.data.products
      })  
    })
  }
}

export default Product;
