import {    combineReducers    } from "redux";
    import products from "./slices/productsSlice";
    import brands from "./slices/brandsSlice";
    import category from "./slices/categorySlice";
    const reducers = combineReducers({
    products,brands,category
    });
    export default reducers;