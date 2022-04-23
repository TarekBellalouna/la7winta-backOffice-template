import {    combineReducers    } from "redux";
    import products from "./slices/productsSlice";
    import brands from "./slices/brandsSlice";
 import events from "./slices/eventSlice";
 
 import users from "./slices/userSlice";
    const reducers = combineReducers({
    products,brands,events,users
 
    });
    export default reducers;