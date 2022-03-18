import * as ActionTypes from "./dishTypes";
import { DISHES } from '../../shared/dishes';
import { baseUrl } from "../../shared/baseUrl";


export const fetchDishes = (string) => (dispatch) => {

    dispatch(dishesLoading(true));

    // setTimeout(() => {
    //     dispatch(addDishes(DISHES));
    // }, 2000);

    // communication with server

    return setTimeout(() => {
        
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${string}`)
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
    }, 2000);
    // return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${string}`)
    // .then(response => {
    //     if (response.ok) {
    //         return response;
    //       } else {
    //         var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //         error.response = response;
    //         throw error;
    //       }
    //     },
    //     error => {
    //           var errmess = new Error(error.message);
    //           throw errmess;
    //     }
    // )
    // .then(response => response.json())
    // .then(dishes => dispatch(addDishes(dishes)))
    // .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});