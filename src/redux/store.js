import { configureStore } from '@reduxjs/toolkit'
import productReducer, { productsFetch } from './features/productSlice';
// import { setupListeners } from '@reduxjs/toolkit/query'
import { productApi } from './features/productApi';

export const store = configureStore({
    reducer: {
        products: productReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware), // 여기 ...읭?
})

store.dispatch(productsFetch());// ?? 아래 꺼랑 차이는

// setupListeners(store.dispatch) //아님 이거 씀 독스..