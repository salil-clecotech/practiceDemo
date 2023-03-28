import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {listAPI} from '../../api/APICall';
export const listAPICall = createAsyncThunk(
  'listapi',
  async (params, thunkAPI) => {
    const response = await listAPI(params);
    return response;
  },
);
const initialState = {
  apidata: [],
  offset: 0,
  isRefresh: false,
  isLoading: true,
  isLoadmore: false,
  listMode: 'initial',
};

const listslice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    onchangeOffset: (state, {payload}) => {
      state.offset = payload.offset;
      state.listMode = payload.listMode;
    },
  },
  extraReducers: {
    [listAPICall.pending]: (state, action) => {
      if (state.listMode === 'initial') {
        state.isLoading = true;
      } else if (state.listMode === 'refresh') {
        state.isRefresh = true;
      } else state.isLoadmore = true;
    },
    [listAPICall.fulfilled]: (state, {payload}) => {
      state.apidata = payload.data.length == 0 ? state.apidata : payload.data;
      state.isRefresh = false;
      state.isLoading = false;
      state.isLoadmore = false;
    },
    [listAPICall.rejected]: (state, {payload}) => {},
  },
});
const {reducer, actions} = listslice;
export default reducer;
export const {onchangeOffset} = actions;

// export const {add,sub} =counterslice.actions;

// export default counterslice.reducer;
