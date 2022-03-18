import { baseUrl } from '../../shared/baseUrl';
import * as ActionTypes from './promotionTypes';
import { PROMOTIONS } from '../../shared/promotions';

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    setTimeout(() => {
        dispatch(addPromos(PROMOTIONS));
    }, 2000);

    // return fetch(baseUrl + 'promotions')
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
    // .then(promos => dispatch(addPromos(promos)))
    // .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});