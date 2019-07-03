import {FetchData,ERROR} from "./types";


const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

export const fetchData = () => {

    return (dispatch) => {
        console.log('Inside async action')
        return fetch(API_URL)
            .then(response => response.json())
            .then(json => dispatch(
                {type: FetchData, data: json}
            ))
            .catch(err => dispatch(
                {type: ERROR, msg: "Unable to fetch data"}
            ))
    }
}