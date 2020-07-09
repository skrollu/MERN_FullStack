import { GET_ITEMS, POST_ITEM, ITEMS_LOADING} from '../actions/types'

const initialState = {
    items: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS: 
            return{
                ...state,
                items: action.payload,
                loading: false
            };
        case POST_ITEM: 
            return {
                ...state
            };
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return {
                ...state
            };
    }
}