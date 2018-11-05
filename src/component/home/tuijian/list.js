import React ,{Component} from "react";
import axios from 'axios'


import './index.scss'

class List extends Component{
  constructor(){
    super()
    this.state = {
      infoList:[]
    }
  }
 
  componentDidMount(){
		axios.get("/v2/page?pageId=1&tabId=1&_=1540945922017").then(res=>{
      let newlist = res.data.data.modules.splice(1,38)
			this.setState({
        infoList:[...this.state.infoList,...newlist]
			},()=>console.log(this.state.infoList))
    })
  }
  
  render(){
    return(
      <div>
        <ul id="cp_list">
          { 
            this.state.infoList.map(item=>
              <li className="info" key={item.moduleId}>
                <h3 className="top_title">{item.moduleName}</h3>
                <p className="top_count">{item.moduleDescription}</p> 
                {
                  item.moduleContent.banners?
                  <img className="top_img" src={item.moduleContent.banners[0].bannerImgSrc}/>
                  :null
                }
                
                {
                  item.moduleContent.products?
                  <div id="home_play">
                    {item.moduleContent.products && item.moduleContent.products.length > 3 ?
                      <div className="swiper-container">
                            <ul className="swiper-wrapper">
                              {
                                item.moduleContent.products.map(every=>
                                  <li className="swiper-slide" key={every.productId}>
                                    <img className="btm_imgs" src={every.productImg}/>
                                    <h3 className="btm_titled">{every.productTitle}</h3>
                                    <div className="btm_priced">
                                      <p className="sellPriced">￥{every.sellPrice}</p>
                                      <span className="originalPriced">￥{every.originalPrice}</span>
                                    </div>
                                  </li>
                                )
                              }
                            </ul>
                      </div>:
                      <ul className="btm_info">
                      {
                        item.moduleContent.products.map(every=>
                          
                          <li className="btm_list" key={every.productId}>
                            <img className="btm_img" src={every.productImg}/>
                            <h3 className="btm_title">{every.productTitle}</h3>
                            <div className="btm_price">
                              <p className="sellPrice">￥{every.sellPrice}</p>
                              <span className="originalPrice">￥{every.originalPrice}</span>
                            </div>
                          </li>
                          )
                      }
                    </ul>
                    }
                  </div>:null
                }
              </li>
            )}
        </ul>
      </div>
      )
  }

}
    
      
export default List;