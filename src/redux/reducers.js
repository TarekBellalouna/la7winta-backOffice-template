import {    combineReducers    } from "redux";
    import products from "./slices/productsSlice";
    import brands from "./slices/brandsSlice";
    const reducers = combineReducers({
    products,brands
    });
    export default reducers;