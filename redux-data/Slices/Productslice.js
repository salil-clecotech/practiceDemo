import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {listapi2} from '../../api/APICall';

export const listAPICall2 = createAsyncThunk(
  'listdata2',
  async (params, thunkapi) => {
    const response = await listapi2(params);
    return response;
  },
);

const initialState = {
  apidata2: [],
  setram: [],
  setcamera: [],
  setcolor: [],
  setname: '',
  offset: 0,
  isLoading: true,
  loadMore: false,
  isRefresh: false,
  listMode: 'initial',
  cartList: [],
  increaseqty: '',
  decreaseqty: '',
};

const productslice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    onchangeoffset(state, {payload}) {
      state.offset = payload.offset;
      state.listMode = payload.listMode;
    },

    onsetname(state, {payload}) {
      state.setname = payload;
    },
    onaddcart: (state, {payload}) => {
      var {type, value, index, id} = payload;
      console.log(type, value, index, id, 'type, value, index');
      if (type === 'update') {
        //update array
        state.cartList[index].qty = state.cartList[index].qty + 1;
        console.log(state.cartList, 'UPDATE');
      } else {
        //add element to array
        state.cartList.push(payload);
        console.log(state.cartList, 'ADDED');
      }
    },
    ondelete(state, {payload}) {
      state.cartList = state.cartList.filter(item => item.id !== payload);
    },

    onsetram(state, {payload}) {
      state.setram = payload;
    },
    onsetcamera(state, {payload}) {
      state.setcamera = payload;
    },
    onsetcolor(state, {payload}) {
      state.setcolor = payload;
    },

    onsetincreaseqty(state, {payload}) {
      let itemindex = state.cartList.findIndex(item => item.id === payload);

      if (state.cartList[itemindex].value.qty >= 1) {
        state.cartList[itemindex].value.qty += 1;
      }
    },
    onsetdecreaseqty(state, {payload}) {
      let itemindex = state.cartList.findIndex(item => item.id === payload);

      state.cartList[itemindex].value.qty -= 1;
    },
  },
  extraReducers: {
    [listAPICall2.pending]: (state, {payload}) => {
      if (state.listMode == 'initial') {
        state.isLoading = true;
      } else if (state.listMode == 'refresh') {
        state.isRefresh = true;
      } else state.loadMore = true;
    },
    [listAPICall2.fulfilled]: (state, {payload}) => {
      state.apidata2 = [...state.apidata2, ...payload.results];
      state.isLoading = false;
      state.isRefresh = false;
    },
    [listAPICall2.rejected]: (state, {payload}) => {
      (state.isRefresh = false),
        (state.isLoading = false),
        (state.loadMore = false);
    },
  },
});
export const {
  onchangeoffset,
  ondelete,
  onsetname,
  onaddcart,
  onsetram,
  onsetcamera,
  onsetcolor,
  onsetcartIndex,
  onSetqty,
  onsetincreaseqty,
  onsetdecreaseqty,
} = productslice.actions;
export default productslice.reducer;
