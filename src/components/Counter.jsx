import React from 'react'
import { useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {

    //created call back function in the hook
    const count   = useSelector((state)=>state.counter.value);

  return (
    <div>
      <button onClick = {()=> dispatch(increment())}>
        Increment
      </button>
      <br/>
      <br/>

      <div>{count}</div>
      <br/>
      <br/>

      <button onClick = {()=> dispatch(decrement())}>
        Decrement
      </button>
    </div>
  )
}

export default Counter


//for finding particular value of slice we use hook, useSelector
//useSelector is used to fetch data from any slice
//flow of app, when we are trying to fetch any state, it goes firstly from store -> slice
//useSelector hook -> to access state
//useDispatch hook -> to access function