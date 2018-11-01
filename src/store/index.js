import {createStore} from "redux";

var reducer=(prevState,action)=>{

    var type=action.type;
    switch(type){
        case "changetitle":
            return action.payload
        default:
            return "商品"
    }
    
}

const store = createStore(reducer);

export default store;