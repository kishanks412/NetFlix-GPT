import { createSlice } from "@reduxjs/toolkit";

const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState: {
    trendingTVShows:null,
  },
  reducers: {
    
    addTrendingTVShows:(state,action) =>{
      state.trendingTVShows= action.payload
    },
  },
});

export const {addTrendingTVShows } = tvShowsSlice.actions;
export default tvShowsSlice.reducer;