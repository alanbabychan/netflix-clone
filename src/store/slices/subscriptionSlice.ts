import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SubscriptionPlan, SubscriptionState } from 'src/types/Subscription';
import { logout } from './authSlice';

const initialState: SubscriptionState = {
  currentPlan: null,
  isSubscribed: false,
  paymentProcessing: false,
};

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    setPaymentProcessing: (state, action: PayloadAction<boolean>) => {
      state.paymentProcessing = action.payload;
    },
    subscribeToPlan: (state, action: PayloadAction<SubscriptionPlan>) => {
      state.currentPlan = action.payload;
      state.isSubscribed = true;
      state.paymentProcessing = false;
    },
    unsubscribe: (state) => {
      state.currentPlan = null;
      state.isSubscribed = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state) => {
      state.currentPlan = null;
      state.isSubscribed = false;
      state.paymentProcessing = false;
    });
  },
});

export const { setPaymentProcessing, subscribeToPlan, unsubscribe } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;