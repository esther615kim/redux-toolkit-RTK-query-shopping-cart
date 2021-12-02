import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    items: [],
    status: null,
    error: null
}

// asyncthunk 함수
export const productsFetch = createAsyncThunk(

    "products/productsFetch",
    async ({ rejectWithValue }) => {
        try {
            const response = await axios.get(
                "https://fakestoreapi.com/productss"
            );
            return response?.data;
        } catch (error) {
            return rejectWithValue("An error has occured");
            // console.log(error);
        }
    }
)

// before adding params in productsFetch
// "products/productsFetch",
// async () => {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     return response?.data;
// }

const productsSlice = createSlice({
    name: 'products', // line 11에 들어감
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state) => {
            state.status = "pending";
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = "success";
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
    },
})

export default productsSlice.reducer


