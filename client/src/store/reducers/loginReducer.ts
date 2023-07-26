import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type LoginStatus = 'checking' | 'authenticated' | 'no-authenticated';

interface LoginState {
  loginStatus: LoginStatus;
}

const initialState = {
  loginStatus: 'no-authenticated',
} as LoginState;

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginStatus(state, action: PayloadAction<LoginStatus>) {
      state.loginStatus = action.payload;
    },
  },
});

export const { setLoginStatus } = loginSlice.actions;
export default loginSlice.reducer;
