import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  authData: any;
}

const initialState: UserState = {
  authData: {}
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.authData = action.payload
    }
  }
});

export const { setAuthData } = userSlice.actions;
export default userSlice.reducer