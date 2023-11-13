import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { AuthenticatedUser } from '../models/user';

export interface UserStore {
  user?: AuthenticatedUser;
  token?: string;
  isLoading: boolean;
}

const initialState: UserStore = {
  user: undefined,
  token: localStorage.getItem('token') ?? undefined,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<AuthenticatedUser | undefined>) {
      state.user = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      if (state.user) state.user.password = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    reset(state) {
      localStorage.removeItem('token');
      Object.assign(state, initialState);
    },
  },
});

export default userSlice.reducer;
export const { setUser, setPassword, setIsLoading, reset } = userSlice.actions;
