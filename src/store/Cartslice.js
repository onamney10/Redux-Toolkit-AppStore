import { createSlice } from "@reduxjs/toolkit";

const initialstate =[];
const cartslice = createSlice({
  name:"cart",
  initialState:initialstate,
  reducers:{
    add(state,action){
      state.push(action.payload);
    },

    remove(state,action){
      return state.filter((item)=>item.id!==action.payload);

    }
  }
});

export  const {add,remove}= cartslice.actions;

export default cartslice.reducer;