import { combineReducers } from "redux";
import home from "./home_reducer";
import team from "./team_reducer";

const rootReducer = combineReducers({
    home,
    team
});

export default rootReducer;