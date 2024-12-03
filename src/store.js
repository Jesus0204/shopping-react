import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartItem/CartSlice';
 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store