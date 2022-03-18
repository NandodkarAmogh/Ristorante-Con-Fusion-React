import * as ActionTypes from './leaderTypes';
import { LEADERS } from '../../shared/leaders';

export const fetchLeaders = () => (dispatch) => {
    
    dispatch(leadersLoading());

    setTimeout(() => {
        dispatch(addLeaders(LEADERS));
    }, 2000);

    // return fetch(baseUrl + 'leaders')
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
    // .then(leaders => dispatch(addLeaders(leaders)))
    // .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});