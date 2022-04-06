import {    combineReducers    } from "redux";
    import products from "./slices/productsSlice";
    import brands from "./slices/brandsSlice";
    import events from "./slices/eventSlice"
    const reducers = combineReducers({
    products,brands, events
    });
    export default reducers;