import {configureStore} from '@reduxjs/toolkit';
import appointmentslice from './Slices/Appointmentslice';
import listslice from './Slices/ListSlice';
import Productslice from './Slices/Productslice';
import Wishlistslice from './Slices/Wishlistslice';
const store = configureStore({
  reducer: {
    appoinment: appointmentslice,
    list: listslice,
    product: Productslice,
    wishlist: Wishlistslice,
  },
});
export default store;
