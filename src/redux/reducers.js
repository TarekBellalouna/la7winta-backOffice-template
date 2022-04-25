import {    combineReducers    } from "redux";
    import products from "./slices/productsSlice";
    import brands from "./slices/brandsSlice";
 import events from "./slices/eventSlice";
 
 import users from "./slices/userSlice";

 import coupons from "./slices/couponsSlice";
 import orders from "./slices/ordersSlice";


    const reducers = combineReducers({
    products,brands,events,users, orders, coupons
 
    });
    export default reducers;