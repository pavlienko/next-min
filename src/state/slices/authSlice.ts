import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "@/state/store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface AuthState {
  authState: boolean;
}

// Initial state
const initialState: AuthState = {
  authState: false,
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      state.authState = action.payload;
    },
  },
  
  extraReducers(builder) {
    builder
      .addCase(HYDRATE, (state, action) => {
              return {
                ...state,
                ...action,
              };
            },
      )
  },
});

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export default authSlice.reducer;