import {    combineReducers    } from "redux";
    import products from "./slices/productsSlice";
    import coupons from "./slices/couponsSlice";
    import orders from "./slices/ordersSlice";

    import events from "./slices/eventSlice"
    const reducers = combineReducers({
    products,orders,coupons, events
    });
    export default reducers;