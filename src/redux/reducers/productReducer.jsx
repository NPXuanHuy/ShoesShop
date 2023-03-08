import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrProduct: [],
    productDetail: null,
}

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProductAction: (state,action) => {
        state.arrProduct = action.payload;
    },
    getProductDetailAction : (state, action) => {
        state.productDetail = action.payload
    },
  }
});

export const {getProductAction, getProductDetailAction} = productReducer.actions

export default productReducer.reducer