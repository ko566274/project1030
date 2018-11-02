import React ,{Component} from "react";
import axios from 'axios'

import './index.scss'

class List extends Component{
  constructor(){
    super()
    this.state = {
      infoList:[],
      listImg:[]
    }
  }
 
  componentDidMount(){
		axios.get("/v2/page?pageId=1&tabId=1&_=1540945922017").then(res=>{
      console.log(res.data)
      let newlist = res.data.data.modules.splice(1,38)
      
			this.setState({
        infoList:[...this.state.infoList,...newlist],
        // listImg:newlist.moduleContent.banners

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
                  
                }
                <ul>

                  {
                    item.moduleContent.products?
                    <li className="btm_list" key={item.moduleContent.products.productId}>
                      <img className="btm_img" src=""/>
                    </li>
                    :null
                  }

                </ul>
                
              </li>
              )  
              
          }   
        
        </ul>
      </div>
    )
  }   
   
}

export default List;