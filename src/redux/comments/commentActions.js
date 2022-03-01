import * as ActionTypes from "./commentTypes";
import { DISHES } from '../../shared/dishes';
import { baseUrl } from '../../shared/baseUrl'


export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});