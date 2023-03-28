import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  //   setram: [],
  //   setcamera: [],
  //   setcolor: [],
  //   setname: '',
  wishListData: [],
  increaseqty: '',
  decreaseqty: '', 
};

const wishlistslice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    // onsetname(state, {payload}) {
    //   state.setname = payload;
    // },
    onaddwishlist: (state, {payload}) => {
      console.log(payload, 'gjkjh');
      state.wishListData = [...state.wishListData, payload];
      console.log(state.wishListData, 'gjkjh');
    },
    onremove(state, {payload}) {
      state.wishListData = state.wishListData.filter(
        item => item.id !== payload,
      );
    },
    // ondelete(state, {payload}) {
    //   state.cartList = state.cartList.filter(item => item.id !== payload);
    // },

    // onsetram(state, {payload}) {
    //   state.setram = payload;
    // },
    // onsetcamera(state, {payload}) {
    //   state.setcamera = payload;
    // },
    // onsetcolor(state, {payload}) {
    //   state.setcolor = payload;
    // },

    // onsetincreaseqty(state, {payload}) {
    //   let itemindex = state.cartList.findIndex(item => item.id === payload);

    //   if (state.cartList[itemindex].value.qty >= 1) {
    //     state.cartList[itemindex].value.qty += 1;
    //   }
    // },
    // onsetdecreaseqty(state, {payload}) {
    //   let itemindex = state.cartList.findIndex(item => item.id === payload);

    //   state.cartList[itemindex].value.qty -= 1;
    // },
  },
});

export const {onaddwishlist, onremove} = wishlistslice.actions;
export default wishlistslice.reducer;
