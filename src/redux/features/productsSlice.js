import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    items: [],
    status: null, // 왜 null??
    // error: null // undefined 아니고 null 주는 이유는 
}
// asyncthunk 함수
export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response?.data;
    }
)
//     "products/productsFetch",
//     async () => {
//         try {
//             const response = await axios.get(
//                 "https://fakestoreapi.com/products"
//             );
//             return response.data;
//         } catch (error) {
//             console.log(error);
//         }
//     }
// );


const productsSlice = createSlice({
    name: 'products', // line 11에 들어감
    initialState,
    reducers: {
    },
    // extraReducers: {
    //     [productsFetch.pending]: (state) => {
    //         state.status = "pending";
    //     },
    //     [productsFetch.fulfilled]: (state, action) => {
    //         state.items = action.payload;
    //         state.status = "success";
    //     },
    //     [productsFetch.rejected]: (state) => {
    //         state.status = "rejected";
    //     },
    // },
})

export default productsSlice.reducer // 여기 이렇게 말고 다른 export 방법은?


