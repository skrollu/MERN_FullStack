import { GET_ITEMS, POST_ITEM, ITEMS_LOADING, ITEMS_COLLECTION} from '../actions/types'

const initialState = {
    items: [],
    loading: false,
    collection: ""
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
        case ITEMS_COLLECTION: 
            return {
                ...state,
                collection: action.payload
            }
        default:
            return {
                ...state
            };
    }
}