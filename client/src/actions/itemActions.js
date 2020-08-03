import { GET_ITEMS, GET_ITEM, ITEMS_LOADING, ITEMS_COLLECTION} from './types';
import axios from 'axios';

export const getItems = (collection) => dispatch => {
    dispatch(setItemsLoading());
    dispatch(setItemsCollection(collection));
    axios.get(`/api/${collection}`)
        .then(res => {
            const data = res.data
            dispatch({ //dispatch data to the reducer //possible only thx to redux thunkMiddleware which abble dispatch call to store in async  call
                type: GET_ITEMS,
                payload: data
            });
            console.log(collection + ' fetched...')
        })

    /*
    fetch('/api/customers')
    .then(res => res.json())
    .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
    */
}

export const getItemsByText = (collection, text) => dispatch => {
    
    dispatch(setItemsLoading());
    dispatch(setItemsCollection(collection));
    axios.get(`/api/${collection}/${text}`)
        .then(res => {
            const item = res.data
            dispatch({ 
                type: GET_ITEMS,
                payload: item
            });
        })
}

export const getItemById = (collection, id) => dispatch => {

    dispatch(setItemsLoading());
    dispatch(setItemsCollection(collection));
    axios.get(`/api/${collection}/${id}`)
        .then(res => {
            const item = res.data
            dispatch({ 
                type: GET_ITEM,
                payload: item
            });
        })
}

export const setItemsLoading = () => {
    return ({
        type: ITEMS_LOADING
    });
}

export const setItemsCollection = (collection) => {
    const col = collection
    return ({
        type: ITEMS_COLLECTION,
        payload: col
    })
}