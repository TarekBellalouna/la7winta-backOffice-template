import {    combineReducers    } from "redux";
    import products from "./slices/productsSlice";
    import brands from "./slices/couponsSlice";
    import orders from "./slices/ordersSlice";

    import events from "./slices/eventSlice"
    const reducers = combineReducers({
    products,orders,brands, events
    });
    export default reducers;