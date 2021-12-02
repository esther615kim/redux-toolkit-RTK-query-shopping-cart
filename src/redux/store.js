import { configureStore } from '@reduxjs/toolkit';
// import productsSlice from './features/productsSlice';
import productsSlice, { productsFetch } from './features/productsSlice';
import { productsApi } from './features/productsApi';
// import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        products: productsSlice,
        // [productsApi.reducerPath]: productsApi.reducer,
    },
    // configure custom middleware
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

store.dispatch(productsFetch());
