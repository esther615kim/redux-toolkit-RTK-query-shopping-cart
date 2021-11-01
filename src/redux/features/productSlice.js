import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    status: null // 왜 null??

}

const productReducer = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
})

export default productReducer.reducer