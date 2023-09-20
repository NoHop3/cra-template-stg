import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { User } from '../models/user';

export interface UserStore {
  id: number;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  apiKey: string;
  birthYear?: number;
  isLoggedIn: boolean;
}

const initialState: UserStore = {
  id: 0,
  username: '',
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  apiKey: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.apiKey = action.payload.apiKey;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.birthYear = action.payload.birthYear;
    },
    setFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    setLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setapiKey(state, action: PayloadAction<string>) {
      state.apiKey = action.payload;
    },
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
    reset(state) {
      state = initialState;
    },
  },
});

export default userSlice.reducer;
export const {
  setUser,
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setUsername,
  setapiKey,
  setIsLoggedIn,
  reset,
} = userSlice.actions;
