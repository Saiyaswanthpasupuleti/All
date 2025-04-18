import {INCREMENT,DECREMENT,INCBYFIVE,DECBYFIVE} from "../Action/Actions.js"

const intialState={
    count:0
}
export const reducer=(state=intialState,action)=>{
    switch (action.type) {
        case INCREMENT:
            return {...state,count:state.count+1}
        case DECREMENT:
                return {...state,count:state.count-1}
            
        case INCBYFIVE:
            return {...state,count:state.count+action.payload}
        case DECBYFIVE:
            return {...state,count:state.count-action.payload}
    
        default:
            return state;
    }

}
