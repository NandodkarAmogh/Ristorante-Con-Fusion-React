import { combineReducers } from "redux";
import { createForms } from "react-redux-form";
import commentsDisplayReducer from "./comments/commentsDisplayReducer";
import dishDisplayReducer from "./displayDish/dishDisplayReducer";
import { InitialFeedback } from "./forms/InitialFeedback";
import { promotionsReducer } from "./promotions/promotionsReducer";
import { leaderReducer } from "./leaders/leaderReducer";

const rootReducer = combineReducers({
    comments: commentsDisplayReducer,
    dishes : dishDisplayReducer,
    promotions:promotionsReducer,
    leaders:leaderReducer,
    ...createForms({
        feedback: InitialFeedback
    })
})

export default rootReducer