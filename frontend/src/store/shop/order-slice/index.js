import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  razorpayOrderId: null,  // Renamed for clarity
  isLoading: false,
  orderId: null,
  orderList: [],
  orderDetails: null,
  // paymentSessionId: null,  Removed as Razorpay handles this
  razorpayPaymentId: null, // To store Razorpay payment ID
};

export const createNewOrder = createAsyncThunk(
  "/order/createNewOrder",
  async (orderData) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/shop/order/create`,
      orderData
    );
    return response.data; // This should now return Razorpay order ID
  }
);


export const getAllOrdersByUserId = createAsyncThunk(
  "/order/getAllOrdersByUserId",
  async (userId) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/shop/order/list/${userId}`
    );
    return response.data;
  }
);

export const getOrderDetails = createAsyncThunk(
  "/order/getOrderDetails",
  async (id) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/shop/order/details/${id}`
    );
    return response.data;
  }
);

// Removed capturePayment as Razorpay handles this during checkout

export const verifyRazorpayPayment = createAsyncThunk(
  "/order/verifyRazorpayPayment",
  async ({ razorpayOrderId, razorpayPaymentId, razorpaySignature }) => { // Corrected parameters
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/shop/order/verify`,
      {
        razorpayOrderId,  // Corrected parameter name
        razorpayPaymentId, // Corrected parameter name
        razorpaySignature, // Added signature for verification
      }
    );
    return response.data;
  }
);

const shoppingOrderSlice = createSlice({
  name: "shoppingOrderSlice",
  initialState,
  reducers: {
    resetOrderDetails: (state) => {
      state.orderDetails = null;
      state.razorpayOrderId = null; // Reset Razorpay order ID
      state.razorpayPaymentId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.razorpayOrderId = action.payload.razorpayOrderId; // Store Razorpay order ID
        state.orderId = action.payload.orderId;
        // state.paymentSessionId = action.payload.paymentSessionId;  Removed
        sessionStorage.setItem(
          "currentOrderId",
          JSON.stringify(action.payload.orderId)
        );
      })
      .addCase(createNewOrder.rejected, (state) => {
        state.isLoading = false;
        state.razorpayOrderId = null;
        state.orderId = null;
        // state.paymentSessionId = null; Removed
      })
      .addCase(getAllOrdersByUserId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrdersByUserId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderList = action.payload.data;
      })
      .addCase(getAllOrdersByUserId.rejected, (state) => {
        state.isLoading = false;
        state.orderList = [];
      })
      .addCase(getOrderDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetails = action.payload.data;
      })
      .addCase(getOrderDetails.rejected, (state) => {
        state.isLoading = false;
        state.orderDetails = null;
      })
      .addCase(verifyRazorpayPayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyRazorpayPayment.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.success) {
          state.orderDetails = action.payload.orderDetails;
        } else {
          state.orderDetails = null;
        }
      })
      .addCase(verifyRazorpayPayment.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { resetOrderDetails } = shoppingOrderSlice.actions;

export default shoppingOrderSlice.reducer;