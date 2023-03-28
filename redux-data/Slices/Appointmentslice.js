import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  doctor: '',
  service: '',
  timing: '',
  insurance: '',
}; 

const counterslice = createSlice({
  name: 'appoinment',
  initialState,
  reducers: {
    onselectdoctor(state, {payload}) {
      state.doctor = payload;
    },
    onselectservice(state, {payload}) {
      state.service = payload;
    },
    onselecttiming(state, {payload}) {
      state.timing = payload;
    },
    onselectinsurance(state, {payload}) {},
  },
});
const {reducer, actions} = counterslice;
export default reducer;
export const {
  onselectdoctor,
  onselectservice,
  onselecttiming,
  onselectinsurance,
} = actions;
