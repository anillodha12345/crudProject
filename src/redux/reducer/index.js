import { combineReducers } from "redux";
import { productsReducer ,cardReducer } from "./reducer";
// import { userReducer } from "./reducer";

 const rootReducer = combineReducers ( {
    //  userList : userReducer,
     cardreducer : cardReducer,
    allProducts :  productsReducer,

     

})

export default rootReducer

