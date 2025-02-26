import {configureStore} from '@reduxjs/toolkit'
import cardReducer from './cardSlice'
import orderReducer  from './placeErderSlice'
import searchReducer  from './searchSlice'
import loginReducer  from './loginSlice'
import userReducer  from './userSlice'
import commentReducer from './commentSlice'



const appStore = configureStore({
    reducer :{
         card: cardReducer,
         order: orderReducer,
         cardSearch: searchReducer,
         login: loginReducer,
         user : userReducer,
         productComment: commentReducer,
        //  user :useReducer
    },

});

export default appStore