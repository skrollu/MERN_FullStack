import { GET_ITEMS, POST_ITEM } from './types';
import axios from 'axios';

export const getItems = () => dispatch => {
    axios.get('/api/customers')
        .then(res => {
            const data = res.data
            dispatch({ //dispatch data to the reducer //possible only thx to redux thunkMiddleware which abble dispatch call to store in async  call
                type: GET_ITEMS,
                payload: data
            });
            console.log('Customers fetched...')
        })

    /*
    fetch('/api/customers')
    .then(res => res.json())
    .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
    */
}
