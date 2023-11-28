import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state?.items?.push(action?.payload);
    },
    removeItem: (state, action) => {
      //state.items = state.items.filter((item)=>item?.card?.info.id !== action.payload)
      return {
        items: state?.items?.filter(
          (item) => item?.card?.info.id !== action?.payload
        ),
      };
    },
    clearItems: (state) => {
      state.items.length = 0;
      // return { 
      //     items : []
      // }
    },
  },
});

export const { addItems, removeItem, clearItems } = cartSlice?.actions;

export default cartSlice?.reducer;
