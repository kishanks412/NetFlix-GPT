/* 
    this configure will be bases on user preference such as 

        - language
        - dark or light theme
        - etc.....
*/

import { createSlice } from "@reduxjs/toolkit";

const configSlice= createSlice({
    name:"config",
    
    initialState:{
        lang:"en",
    },
    reducers:{
        changeLanguage:(state, action) => {
            state.lang = action.payload;
        }
    }
})

export const {changeLanguage} =configSlice.actions;
export default configSlice.reducer