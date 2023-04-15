import { createSlice } from '@reduxjs/toolkit';

const counter = createSlice({
    name:'name',
    initialState:{
        count: 0
    },
    reducers:{
        increment:(state)=>{
            state.count=state.count+1;
        },
        decrement:(state)=>{
            state.count=state.count-1;
        },
        reset:(state)=>{
            state.count=0;
        },
    }

})

export const { increment, decrement, reset } = counter.actions;

export default counter.reducer;

