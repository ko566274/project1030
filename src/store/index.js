import {createStore,combineReducers} from "redux";

var Changereducer=(prevState="商品",action)=>{

    var type=action.type;
    switch(type){
        case "changetitle":
            return action.payload
        default:
            return prevState;
    }
    
}


// var reducer = combineReducers({
//     Changereducer1:Changereducer1,
//     Changereducer2:Changereducer2
// })

const store = createStore(Changereducer);

export default store;