import { createSlice } from "@reduxjs/toolkit";




const cardSlice =createSlice({
    name:'card',
    initialState: {
        items: []
    },
    reducers: {
       addItems: (state , action)=>{
            state.items.push(action.payload)
       },
       removeItems: (state ,action)=>{
        state.items.pop()
       },
       clearCard:(state , action)=>{
        state.items.length=0;
       }
    }
})

 export const{addItems , removeItems , clearCard}=cardSlice.actions;

 export default cardSlice.reducer


