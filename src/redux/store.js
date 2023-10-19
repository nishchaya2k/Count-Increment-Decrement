import {configureStore} from '@reduxjs/toolkit'
import CounterSlice from './slices/CounterSlice'

export const store = configureStore({
    reducer:{
        counter: CounterSlice           //key : reducer, (name of key will be same as name defined in slice)
        //counterslice or counterSlice.reducer or CounterSlice.Reducer can write anything, all acceptable
    }
})


//to create redux store, we call a function named as configureStore,
//configureStore creates a global store where all the centralized data is present
//used 1 paramter in it, reducer() ...., can be used more if needed further
//we have defined one slice and its reducer 'CounterSlice' in reducer
//one centralized store is made up of multiple slices
//in store, u have to list all the slices
//Basically, store is global state of app where all the states are present in the form of slices
//where slices is the portion of data
//in redux, u need two to do things create slices and centralized store
//How to link redux and react?   -> with the help of 'provider', in index.js we will wrap app.js under provider so that all app component can access redux functionality
