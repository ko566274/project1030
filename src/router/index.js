import React from 'react';
import { BrowserRouter as Router, Route,Redirect, Switch } from "react-router-dom";

import App from '../App';
import Home from '../component/home';
import Genre from '../component/genre';
import Product from '../component/product';
import Shopcard from '../component/shopcard';
import Msn from '../component/msn';
import My from '../component/my';
// home二级页面
import Tuijian from '../component/home/tuijian';
import Jiaju from '../component/home/jiaju';
import Jiajuyongpin from '../component/home/jiajuyongpin';
import Huodong from '../component/home/huodong';
import NewProduct from '../component/product/newProduct';
import NewPrice from '../component/product/newPrice';
import Selling from '../component/product/selling';



const router = (
  <Router>
    <App>
      <Switch>
        <Route path="/home" render={()=>
          <Home>
            <Switch>
              <Route path="/home/tuijian" component={Tuijian}/>
              <Route path="/home/jiaju" component={Jiaju}/>
              <Route path="/home/jiajuyongpin" component={Jiajuyongpin}/>
              <Route path="/home/huodong" component={Huodong}/>
            </Switch>
          </Home>
        }/>
        <Route path="/product/:KGid" component={Product}/>
        <Route path="/product" render={()=>
          <Product>
            <Switch>
            <Route path="/product/newProduct" component={NewProduct}/>
            <Route path="/product/selling" component={Selling}/>
            <Route path="/product/newPrice" component={NewPrice}/>
            </Switch>
          </Product>
        }/>
          
        <Route path="/genre" component={Genre}/>
        <Route path="/shopcard" component={Shopcard}/>
        <Route path="/msn" component={Msn}/>
        <Route path="/my" component={My}/>
        
        <Redirect from='*' to='/home' />
      </Switch>
    </App>
  </Router>
)
export default router;