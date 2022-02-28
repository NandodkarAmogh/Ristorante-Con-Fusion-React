import { combineReducers } from "redux";
import { createForms } from "react-redux-form";
import dishReducer from "./dishes/dishReducer";
import dishDisplayReducer from "./displayDish/dishDisplayReducer";
import { InitialFeedback } from "./forms/InitialFeedback";

const rootReducer = combineReducers({
    comments: dishReducer,
    dishes : dishDisplayReducer,
    ...createForms({
        feedback: InitialFeedback
    })
})

export default rootReducer