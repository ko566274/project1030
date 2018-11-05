import React ,{Component} from "react";
import "./index.scss";
import axios from "axios";
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
class Jiaju extends Component{
	constructor(){
		super();
		this.state={
			looplist:[]
		}
	}
  render(){
    return <div id="jiaju">
    	<div className="swiper-container swiper-banner">
	    	<div className="swiper-wrapper">
		    	{
		    		this.state.looplist[0]?
			    	this.state.looplist[0].moduleContent.banners.map((item)=>
			    		<div className="swiper-slide" key={item.id}>
			    			<img src={item.bannerImgSrc} />		    		
			    		</div>
		    	):''
		    	
		    	}
		    </div>
	    </div>
	    <div className="bannertitle">
	    	<div className="bannerbt">
	    		
    			{
    				this.state.looplist[1]?   				
    				<h3>{this.state.looplist[1].moduleName}</h3>:''
    			}
	    				
	    		{
    				this.state.looplist[1]?	
    					<p>{this.state.looplist[1].moduleDescription}</p>:''
    			}
	    	</div>
	    	<div className="swiper-container swiper-titleli">
		    	<div className="swiper-wrapper">
			    	{
			    		this.state.looplist[1]?
				    	this.state.looplist[1].moduleContent.products.map((item)=>
				    		<div className="swiper-slide proimg" key={item.id}>
				    			<img src={item.productImg} />
				    			<p className="productname">{item.productName}</p>
				    			<p className="sellname">￥{item.sellPrice}</p>		    		
				    		</div>
			    	):''	    	
			    	}
			    </div>
		    </div>
		    <div className="jsqjfooter">
	    		<a href="/home/jiaju">查看全部</a>
	    	</div>
	    </div>
	    <div className="modle">
	    	<div className="modle-title">	    		
    			{
    				this.state.looplist[2]?   				
    				<h3>{this.state.looplist[2].moduleName}</h3>:''
    			}			
	    		{
    				this.state.looplist[2]?   				
    				<p>{this.state.looplist[2].moduleDescription}</p>:''
    			}
	    	
	    		{
		    		this.state.looplist[2]?
			    	this.state.looplist[2].moduleContent.banners.map((item)=>
			    		<div className="modle-img" key={item.id}>
			    			<img src={item.bannerImgSrc} />		    		
			    		</div>):''   
		    	}
		    	<div className="modle-list">
		    		<ul>
	    				{
				    		this.state.looplist[2]?
					    	this.state.looplist[2].moduleContent.products.slice(0, 3).map((item)=>
							<li>
			    			<img src={item.productImg} />
			    			<p className="modlename">{item.productTitle}</p>
			    			<p className="modlejg">￥{item.sellPrice}</p>	
			    			</li>):'' 	    				  
				    	}
		    		</ul>	
		    	</div>

	    	</div>
	    </div>
	    <div className="rmfl">
	    	<div className="rmfl-bt">
	    		{
    				this.state.looplist[3]?   				
    				<h3>{this.state.looplist[3].moduleName}</h3>:''
    			}
	    	</div>
	    	<div className="rmfl-list">
	    		<ul>
    				{
			    		this.state.looplist[3]?
				    	this.state.looplist[3].moduleContent.banners.map((item)=>
						<li>
		    			<img src={item.bannerImgSrc} />
		    			</li>):'' 	    				  
			    	}
		    	</ul>
	    	</div>
	    </div>
	    <div className="dpzj">
	    	<div className="dpzj-bt">
	    		{
    				this.state.looplist[4]?   				
    				<h3>{this.state.looplist[4].moduleName}</h3>:''
    			}
    			{
    				this.state.looplist[4]?	
    				<p>{this.state.looplist[4].moduleDescription}</p>:''
    			}
	    	</div>
	    	<div className="dpzjlist">
	    		<ul>
    				{
			    		this.state.looplist[4]?
				    	this.state.looplist[4].moduleContent.products.map((item)=>
						<li>
		    			<img src={item.productImg} />
		    			<p className="dpzjname">{item.productName}</p>
			    		<p className="dpzjjg">￥ {item.sellPrice}</p>
		    			</li>):'' 	    				  
			    	}
		    	</ul>
	    	</div>
	    	<div className="dpzjfooter">
	    		<a href="/home/jiaju">查看全部</a>
	    	</div>
	    </div>
	    <div className="jsqj">
	    	<div className="jsqj-bt">
	    		{
    				this.state.looplist[5]?   				
    				<h3>{this.state.looplist[5].moduleName}</h3>:''
    			}
    			{
    				this.state.looplist[5]?	
    				<p>{this.state.looplist[5].moduleDescription}</p>:''
    			}
	    	</div>
	    	<div className="jsqjlist">
	    		<ul>
    				{
			    		this.state.looplist[5]?
				    	this.state.looplist[5].moduleContent.products.map((item)=>
						<li>
		    			<img src={item.productImg} />
		    			<p className="jsqjname">{item.productName}</p>
			    		<p className="jsqjjg">￥ {item.sellPrice}</p>
		    			</li>):'' 	    				  
			    	}
		    	</ul>
	    	</div>
	    	<div className="jsqjfooter">
	    		<a href="/home/jiaju">查看全部</a>
	    	</div>
	    </div>
	    <div className="wjyj">
	    	<div className="wjyj-bt">
	    		{
    				this.state.looplist[6]?   				
    				<h3>{this.state.looplist[6].moduleName}</h3>:''
    			}
    			{
    				this.state.looplist[6]?	
    				<p>{this.state.looplist[6].moduleDescription}</p>:''
    			}
	    	</div>
	    	<div className="wjyjlist">
	    		<ul>
    				{
			    		this.state.looplist[6]?
				    	this.state.looplist[6].moduleContent.products.map((item)=>
						<li>
		    			<img src={item.productImg} />
		    			<p className="wjyjname">{item.productName}</p>
			    		<p className="wjyjjg">￥ {item.sellPrice}</p>
		    			</li>):'' 	    				  
			    	}
		    	</ul>
	    	</div>
	    	<div className="wjyjfooter">
	    		<a href="/home/jiaju">查看全部</a>
	    	</div>
	    </div>	
    </div>
 }   
   componentDidMount(){
   	
   	axios.get("/v2/page?pageId=1&tabId=10005&_=1540952005150").then(res=>{
			// console.log(res.data.data.modules.slice(0,1))
			 // console.log(res.data.data.modules[1])
			this.setState({
				looplist:res.data.data.modules

			},function(){
				var swiper1 = new Swiper('.swiper-banner', {
				     
				      loop:true,
				      pagination: {
				        el: '.swiper-pagination',
				        clickable: true,
				      },
				    });
				}

			)
		})
   	axios.get("/v2/page?pageId=1&tabId=10005&_=1540952005150").then(res=>{
			 //console.log(res.data.data.modules.slice(1,2))
			  // / console.log(res.data.data.modules)
			this.setState({
				looplist:res.data.data.modules

			},function(){
				console.log(this.state.looplist)

				var swiper = new Swiper('.swiper-titleli', {
				     slidesPerView : 'auto',
				     loopedSlides: 8,
				      loop:false,
				      pagination: {
				        el: '.swiper-pagination',
				        clickable: true,
				      },
				    });
				}
			)
		})
     
   }
   
}

export default Jiaju;