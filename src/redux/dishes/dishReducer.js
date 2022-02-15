import { DISHES } from '../../shared/dishes';
import { COMMENTS } from '../../shared/comments';
import { PROMOTIONS } from '../../shared/promotions';
import { LEADERS } from '../../shared/leaders';
import { ADD_COMMENT } from './ActionTypes';


export const dishInitialState = {
    dishes: DISHES,
    comments:COMMENTS,
    promotions:PROMOTIONS,
    leaders:LEADERS
}

const dishReducer = ( state = dishInitialState, action) => {
    switch(action.type) {
        case ADD_COMMENT : 
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
        
        return {
            ...state,
            comments: state.comments.concat(comment)
        
        }

        default: return state
    }
    // console.log(state)
    // return state;
}

export default dishReducer