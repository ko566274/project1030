import React ,{Component} from "react";
import axios from 'axios'

import './index.scss'

let Swiper = window.Swiper;

class Banner extends Component{

    constructor(){
        super();
        this.state = {
            playlist:[],
            listObj:[]
        }
    }
    componentWillUnmount() {
        if (this.swiper) { // 销毁swiper
            this.swiper.destroy()
        }


    }

    componentDidMount(){
        axios.get("/v2/page?pageId=1&tabId=10010&_=1541058050853").then(res=>{

            this.setState({
                playlist:[...this.state.playlist,...res.data.data.modules[0].moduleContent.banners],
                listObj:[res.data.data.modules]

            },()=>{this.props.myevent(this.state.listObj)})
        })



    }


    componentDidUpdate(){
        if(this.swiper){
            this.swiper.slideTo(0, 0)
            this.swiper.destroy()
            this.swiper = null;
        }
        this.swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

    }
    render(){
        return(<div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        this.state.playlist.map(item=>
                            <div className="swiper-slide" key={item.id}>
                                <img src={item.bannerImgSrc}/>
                            </div>
                        )
                    }

                </div>

                <div className="swiper-pagination"></div>


            </div>
        )
    }

}

export default Banner;