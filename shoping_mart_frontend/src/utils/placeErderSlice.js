

import { createSlice } from "@reduxjs/toolkit";




const placeErderSlice =createSlice({
    name:'order',
    initialState: {
        items: []
    },
    reducers: {
       addOrder: (state , action)=>{
            state.items.unshift(action.payload)
       },
      
       clearOrder:(state , action)=>{
        state.items.length=0;
       }
    }
})

 export const{ addOrder , clearOrder}=placeErderSlice.actions;

 export default placeErderSlice.reducer


