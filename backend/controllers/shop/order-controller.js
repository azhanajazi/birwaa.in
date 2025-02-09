const Razorpay = require("razorpay");
const Order = require("../../models/Order");
const Cart = require("../../models/Cart");
const Product = require("../../models/Product");
const crypto = require("crypto");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createOrder = async (req, res) => {
  try {
    const { totalAmount } = req.body;

    const options = {
      amount: totalAmount * 100, 
      currency: "INR",
      receipt: "order_rcptid_" + Date.now(),
    };

    razorpay.orders.create(options, (err, order) => {
      if (err) {
        console.error("Razorpay Order Creation Error:", err);
        return res.status(500).json({ success: false, message: "Failed to create Razorpay order", error: err });
      }

      console.log("✅ Razorpay Order Created:", order);

      res.status(201).json({
        success: true,
        razorpayOrderId: order.id,
        amount: order.amount / 100,
        key: process.env.RAZORPAY_KEY_ID,
      });
    });

  } catch (error) {
    console.error("❌ Create Order Error:", error);
    res.status(500).json({ success: false, message: "Failed to create order", error: error });
  }
};

const verifyRazorpayPayment = async (req, res) => {
  try {
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature, userId, cartItems, addressInfo, totalAmount, orderDate, orderUpdateDate, cartId } = req.body;

    const body = razorpayOrderId + "|" + razorpayPaymentId;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpaySignature) {
      // 🔹 Order create karna
      const newOrder = new Order({
        userId,
        cartId,
        cartItems,
        addressInfo,
        totalAmount,
        orderDate,
        orderUpdateDate,
        paymentId: razorpayPaymentId,
        orderStatus: "confirmed",
        paymentStatus: "paid",
      });

      await newOrder.save();

      // 🔹 Stock deduction for each ordered product
      for (let item of cartItems) {
        const product = await Product.findById(item.productId);
        if (!product) {
          return res.status(404).json({ success: false, message: `Not enough stock for ${item.title}` });
        }
        product.totalStock -= item.quantity;
        await product.save();
      }

      // 🔹 Delete cart after successful order
      await Cart.findByIdAndDelete(cartId);

      console.log("✅ Payment Verified & Order Placed:", newOrder);
      res.json({ success: true, message: "Payment verified & order placed successfully", orderDetails: newOrder });

    } else {
      console.log("❌ Invalid Razorpay Signature - Payment Failed");
      return res.status(400).json({ success: false, error: "Invalid signature" });
    }
  } catch (error) {
    console.error("❌ Verify Payment Error:", error);
    res.status(500).json({ success: false, error: "Payment verification failed" });
  }
};

const getAllOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId }).populate("cartItems.productId");

    if (!orders.length) {
      return res.status(404).json({ success: false, message: "No orders found!" });
    }

    // 🔹 Order format karna taaki product image bhi aaye
    const formattedOrders = orders.map((order) => ({
      ...order._doc,
      cartItems: order.cartItems.map((item) => ({
        productId: item.productId?._id,
        title: item.productId?.title || "Unknown Product",
        price: item.price,
        quantity: item.quantity,
        image: item.productId?.image || "https://via.placeholder.com/50", // 🔹 Default image agar na ho
      })),
    }));

    res.status(200).json({ success: true, data: formattedOrders });
  } catch (e) {
    console.error("❌ Error in getAllOrdersByUser:", e);
    res.status(500).json({ success: false, message: "Some error occurred!" });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id).populate("cartItems.productId");

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found!" });
    }

    // 🔹 Order details ko format karna taaki image show ho
    const formattedOrder = {
      ...order._doc,
      cartItems: order.cartItems.map((item) => ({
        productId: item.productId?._id,
        title: item.productId?.title || "Unknown Product",
        price: item.price,
        quantity: item.quantity,
        image: item.productId?.image || "https://via.placeholder.com/50",
      })),
    };

    res.status(200).json({ success: true, data: formattedOrder });
  } catch (e) {
    console.error("❌ Error in getOrderDetails:", e);
    res.status(500).json({ success: false, message: "Some error occurred!" });
  }
};

module.exports = {
  createOrder,
  verifyRazorpayPayment,
  getAllOrdersByUser,
  getOrderDetails,
};
