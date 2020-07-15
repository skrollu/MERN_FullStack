import { GET_ITEMS, ITEMS_LOADING, ITEMS_COLLECTION} from './types';
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

export const getItemsBy = (collection, text) => dispatch => {
    console.log("fetching..." + text);
    
    dispatch(setItemsLoading());
    axios.get(`/api/${collection}/${text}`)
        .then(res => {
            const data = res.data
            dispatch({ //dispatch data to the reducer //possible only thx to redux thunkMiddleware which abble dispatch call to store in async  call
                type: GET_ITEMS,
                payload: data
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