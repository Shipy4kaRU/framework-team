import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPaintsData, IAuthors, ILocations } from '../interfaces/interfaces';

const initialState: IPaintsData = {
  authors: [],
  locations: [],
};

const paintsData = createSlice({
  name: 'paintsData',
  initialState,
  reducers: {
    setAuthors(state, action: PayloadAction<IAuthors[]>) {
      state.authors = action.payload;
    },
    setLocations(state, action: PayloadAction<ILocations[]>) {
      state.locations = action.payload;
    },
  },
});

export default paintsData.reducer;
export const { setAuthors, setLocations } = paintsData.actions;
