import { createSlice} from "@reduxjs/toolkit";
import { queryApi} from "../../utils/queryApi";
let initialState = {
events: [],
selectedEvent: {},
errors: "",
};

const eventSlice = createSlice({
name: "events",
initialState,
reducers: {
populateEvent(state, action) {
    
state.events = action.payload;
},
selectEvent(state, action) {
state.selectedEvent = action.payload;
},
unselectEvent(state) {
state.selectedProduct = null;
},
deleteEvent: (state, action) => {
const payload = action.payload;
const index = state.products.findIndex((item) => item._id === payload);
if (index !== -1) {
state.products.splice(index, 1);
}
},


setErrors(state, action) {
state.errors = action.payload;
},
},

});
export const fetchEvents = () => async (dispatch) => {
const [res, error] = await queryApi("event/all?searchValue");
console.log(res)
if (error) {
dispatch(setErrors(error));
} else {
    
dispatch(populateEvent(res));
}
};
export const selectEvent = (state) => {
return [state.events.events, state.events.errors];
};
export const selectSelectedProduct = (state) => {
return state.products.selectedProduct;
};
export const {
populateEvent,
selectProduct,
unselectProduct,
setErrors,
deleteProduct,
updateProduct,
addProduct,
} = eventSlice.actions;
export default eventSlice.reducer;