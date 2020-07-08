import { GET_ITEMS, POST_ITEM } from '../actions/types'

const initialState = {
    items: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS: 
            return{
                ...state,
                items: action.payload
            };
        case POST_ITEM: 
            return {
                ...state
            };
        default:
            return {
                ...state
            };
    }
}