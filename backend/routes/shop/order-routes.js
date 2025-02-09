const express = require("express");
const { createOrder, getAllOrdersByUser, getOrderDetails, verifyRazorpayPayment } = require("../../controllers/shop/order-controller");  // Updated imports

const router = express.Router();

router.post("/create", createOrder); // This remains the same, but the controller logic will change
// router.post("/capture", capturePayment);  Removed capture route
router.get("/list/:userId", getAllOrdersByUser);
router.get("/details/:id", getOrderDetails);
router.post("/verify", verifyRazorpayPayment); // Updated to verifyRazorpayPayment

module.exports = router;