import React ,{Component} from "react";
import "./css.scss"
import Banner from "./banner"
class Huodong extends Component{


    constructor(){
        super();
        this.state = {
            myList:[],
            myNewList:[],
            imgsrc:"",
            products:[]
        }
    }

  render(){
    return(
        <div>
            <div className="mar">
                < Banner myevent={(data)=>{
                    console.log(data);
                    this.setState({
                        myList: [...this.state.myList,...data[0]],

                    },()=>{
                        this.setState({
                          imgsrc: this.state.myList[1].moduleContent.bannerImgSrc,
                                myNewList: [...this.state.myNewList,...data[0].slice(2,-1)],
                                products:[...this.state.products,...this.state.myList.splice(-1,1)[0].moduleContent.products]
                    },()=>{console.log(this.state.products)}
                    )})

                }} />
            </div>
        <div className="self">
            <img src={this.state.imgsrc} />
        </div>

            {
                this.state.myNewList.map(item=>
                    <div className="newlist" key={item.moduleContent.bannerLinkTargetId}>
                        <img src={item.moduleContent.bannerImgSrc}/>
                    </div>

                )
            }
            <div className="pagemodule">
                <div className="reqi">
                    <h1>人气单品</h1>
                </div>
                <div className="wai">
                    {
                        this.state.products.map(item=>
                            <div className="productList" key={item.productId}>
                                <a>
                                    <img src={item.productImg} />
                                    <div className="price">
                                        <p>{item.productName}</p>
                                        <span className="sell">¥{item.sellPrice}</span>
                                        <span style={{display: (item.sellPrice===item.originalPrice) ? "none" : "inline-block"}} className="orPrice">
                                           ¥ {item.originalPrice}
                                        </span>
                                    </div>
                                </a>

                            </div>


                        )
                    }
                </div>

            </div>
            <div className="footh"></div>
        </div>
    )
  }

    componentDidMount(){

    }
}
export default Huodong;


