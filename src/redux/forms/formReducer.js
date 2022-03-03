import * as ActionTypes from './formTypes';

const formReducer = ( state = { errMess: null, feedback:[]}, action) => {
    switch (action.type) {
      case ActionTypes.ADD_FEEDBACK:
        return {...state, errMess: null, feedback: action.payload};

      default:
        return state;
    }
  };

export default formReducer