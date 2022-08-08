import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = '3b937f44-90cd-4180-8a25-aced6a07e5fc';
axios.defaults.headers.common['x-api-key'] = API;

export const axiosGetImg = createAsyncThunk('cat/axiosGetImg', async function () {
  try {
    let response = await axios.get('https://api.thecatapi.com/v1/images/search', {
      params: { limit: 1, size: 'full' },
    });
    let image = response.data[0];
    return image;
  } catch (error) {
    console.log(error);
  }
});

export const axiosVoting = createAsyncThunk('cat/axiosVoting', async function () {
  try {
    let response = await axios.get('https://api.thecatapi.com/v1/votes', {
      params: { order: 'DESC', limit: 25 },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  imgURL: {},
  voting: [],
  status: null,
  error: null,
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCatUrl(state, action) {
      state.imgURL = action.payload;
    },
  },
  extraReducers: {
    [axiosGetImg.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [axiosGetImg.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.imgURL = action.payload;
    },
    [axiosGetImg.rejected]: (state, action) => {},
    [axiosVoting.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [axiosVoting.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.voting = action.payload;
    },
    [axiosVoting.rejected]: (state, action) => {},
  },
});

export const { setCatUrl } = filterSlice.actions;

export default filterSlice.reducer;
