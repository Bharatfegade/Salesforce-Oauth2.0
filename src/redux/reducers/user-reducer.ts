import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  userName: string;
}

const initialState: UserState = {
  userName: ""
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.userName = action.payload
    }
  }
});

export const { setName } = userSlice.actions;
export default userSlice.reducer