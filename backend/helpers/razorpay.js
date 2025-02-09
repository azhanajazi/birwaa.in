const axios = require("axios");
require("dotenv").config();

const createRazorpayOrder = async (orderData) => {
  const url = "https://api.razorpay.com/v1/orders"; // Razorpay API URL

  const auth = {
    username: process.env.RAZORPAY_KEY_ID, // Your Razorpay Key ID
    password: process.env.RAZORPAY_KEY_SECRET, // Your Razorpay Key Secret
  };

  try {
    console.log("🔍 Sending request to Razorpay...");
    console.log("Request Data:", orderData); // Log the data being sent

    const response = await axios.post(url, orderData, { auth });

    console.log("✅ Razorpay Response:", response.data);

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error Response from Razorpay:", error.response.data);
      throw new Error(error.response.data.error.description || "Error in Razorpay API"); // More specific error message
    } else if (error.request) {
      console.error("No response received from Razorpay:", error.request);
      throw new Error("No response from Razorpay API");
    } else {
      console.error("Request setup error:", error.message);
      throw new Error("Error setting up Razorpay request");
    }
  }
};

module.exports = { createRazorpayOrder };