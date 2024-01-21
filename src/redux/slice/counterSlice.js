import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state,action)=>{
            state.value++;
        },
        decrement:(state,action)=>{
            state.value--;
        },
        increasedBy:(state,action)=>{
            state.value += action.payload
        }
    }
})
console.log(counterSlice);
export const {increment,decrement,increasedBy} = counterSlice.actions;
export default counterSlice.reducer;