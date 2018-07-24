/* import { createStore } from "react-redux";
import { add } from "../reducers";

const store = createStore(add, {note:[]});

store.subscribe(()=>{
    console.log("storage connected",this.getState());
})


 */

import {createStore} from "react-redux";

const reducer=function(state,action){
    if(action.type=="INC"){
        return state+action.payload;
    }
    return state;
}

const store= createStore(reducer,0);

store.subscribe(()=>{
    console.log("store changed",store.getState())
})

store.dispatch({type:"INC",payload:1}); 