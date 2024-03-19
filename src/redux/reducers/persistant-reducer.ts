import { createSlice } from '@reduxjs/toolkit';

interface PersistantState {
  userName: string;
}

const initialState: PersistantState = {
  userName: "",
}

const persistantSlice = createSlice({
  name: 'persistant',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.userName = action.payload
    }
  }
});

export const { setUsername } = persistantSlice.actions;
export default persistantSlice.reducer