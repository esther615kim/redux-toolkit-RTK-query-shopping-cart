import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    items: [],
    status: null, // 왜 null??
    error: null // undefined 아니고 null 주는 이유는 
}
// asyncthunk 함수
export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response?.data;
    }
)

const productReducer = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
})

export default productReducer.reducer // 여기 이렇게 말고 다른 export 방법은?