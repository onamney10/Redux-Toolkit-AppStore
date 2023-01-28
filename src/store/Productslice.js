import { createSlice } from "@reduxjs/toolkit";
  export const STATUSES = Object.freeze(
  {
      IDLE:"idle",
      ERROR:"error",
      LOADING:"loading"

  }
);
const productslice = createSlice({
  name:"product",
  initialState:{

    data:[],
    status:STATUSES.IDLE
  },
  reducers:{

    setdata(state,action){
      state.data = action.payload;
    },
    setstatus(state,action){
      state.status = action.payload;

    }

  }
});
export const  { setdata,setstatus } = productslice.actions;
export default productslice.reducer; 

// thunk
export function fetchproducts(){
  return async function fetchingproducts(dispatch,getstate){
          dispatch(setstatus(STATUSES.LOADING))
        try{
          const res = await fetch("https://fakestoreapi.com/products");
          const data = await res.json();
          dispatch(setdata(data));
          dispatch(setstatus(STATUSES.IDLE));
        }catch(err){
          console.log(err);
          dispatch(setstatus(STATUSES.ERROR))
        }



  }
}