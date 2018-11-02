import React ,{Component} from "react";
import axios from 'axios'

import './index.scss'

let Swiper = window.Swiper

class Banner extends Component{
  constructor(){
    super()
    this.state = {
      playlist:[]
    }
  }
  componentWillUnmount() {
      if (this.swiper) { // 销毁swiper
       this.swiper.destroy()
      }
  }

  componentDidMount(){
		axios.get("/v2/page?pageId=1&tabId=1&_=1540945922017").then(res=>{
      console.log(res.data.data.modules[0].moduleContent.banners)
			this.setState({
				playlist:[...this.state.playlist,...res.data.data.modules[0].moduleContent.banners]
			})
		})
	}


  componentDidUpdate(){
   if(this.swiper){
      this.swiper.slideTo(0, 0)
      this.swiper.destroy()
      this.swiper = null;
    }
   this.swiper = new Swiper('.swiper-container', {
        effect: 'cube',
        grabCursor: true,
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });

    }
  render(){
    return(
      <div>
        {/* 轮播图 */}
        <div className="swiper-container">
          <ul className="swiper-wrapper">
          {
            this.state.playlist.map(item=>
              <li className="swiper-slide" key={item.id}>
                <img src={item.bannerImgSrc}/>
              </li>
            )
          }      
          </ul>

          {/* Add Pagination */}
          <div className="swiper-pagination"></div>


       
        </div>
      </div>
    )
  }   
   
}

export default Banner;