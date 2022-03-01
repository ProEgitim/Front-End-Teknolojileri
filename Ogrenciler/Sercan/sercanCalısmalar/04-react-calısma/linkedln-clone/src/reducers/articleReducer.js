import { SET_LOADİNG_STATUS } from '../actions/actionType'


export const initState = {
    loading: false,
}

const articleReducer = (state = initState, action)=>{
    switch(action.type){
        case SET_LOADİNG_STATUS : 
        return {
            ...state,
            loading: action.status,
        };
        default:
           return state;

    }
}

export default articleReducer;