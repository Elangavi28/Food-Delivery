import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    Additem: (state, action) => {
      let exitsItem = state.find((item) => item.id === action.payload.id);
      if (exitsItem) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.push(action.payload);
      }
    },
    Removeitem: (state, actions) => {
      return state.filter((item) => item.id !== actions.payload);
    },
    IncrementQty:(state,action)=>{
       return state.map((item) =>
          item.id === action.payload? { ...item, qty: item.qty + 1 } : item
        );
    },
    DecrementQty:(state,action)=>{
        return state.map((item) =>
          item.id === action.payload? { ...item, qty: item.qty - 1 } : item
        );

    }
  },
});

export const { Additem, Removeitem,IncrementQty,DecrementQty } = cartSlice.actions;
export default cartSlice.reducer;
