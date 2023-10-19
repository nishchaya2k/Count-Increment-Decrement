import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value:0
}

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{          //reducers are used for functionalities
    //we'll create object in it, and in object we will define out functionalities
    increment: (state) => {state.value+=1;},            //we have used function and in that we passed current state
    decrement: (state) => {state.value-=1;}
    }
})

//if we want to get the implementation of increament and decrement we have to get the value from their action (Counter.slice)
export const {increment,decrement} = CounterSlice.actions;
export default CounterSlice.reducer;









//action creators are generated for each reducer function
//if you want to get the implemention of each function from slice, it can be access from action creater, 

//its a behaviour of slice that all the functionalities of reducer get stored in acion creater and to access action creater, we use counter.Slice.actions
//now we will fetch the functionalities from action creator and export it
//then we will export reducer from CounterSlice
//reducer -> all the definition of main functions for the app is defined in reducer
//all the export are syntax