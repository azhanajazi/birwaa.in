import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { verifyRazorpayPayment } from "@/store/shop/order-slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

function RazorpayReturnPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { orderDetails } = useSelector((state) => state.shoppingOrderSlice); // Get order details from Redux

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const razorpayOrderId = params.get("razorpay_order_id");
    const razorpayPaymentId = params.get("razorpay_payment_id");
    const razorpaySignature = params.get("razorpay_signature");

    if (razorpayOrderId && razorpayPaymentId && razorpaySignature) {
      dispatch(verifyRazorpayPayment({ razorpayOrderId, razorpayPaymentId, razorpaySignature }))
        .then((data) => {
          if (verifyRazorpayPayment.fulfilled.match(data)) {
            toast({ title: "Payment Successful!", variant: "success" });

            // Check if orderDetails is available before redirecting
            if (orderDetails) {
                navigate("/shop/payment-success");
            } else {
                console.error("Order details not available after successful payment.");
                toast({ title: "Order details not found.", variant: "destructive" });
                navigate("/shop/payment-failed");
            }

          } else {
            toast({ title: "Payment failed. Please try again.", variant: "destructive" });
            navigate("/shop/payment-failed");
          }
        })
        .catch((error) => {
          console.error("Error during payment verification:", error);
          toast({ title: "Error occurred during payment verification.", variant: "destructive" });
          navigate("/shop/payment-failed");
        });
    } else {
      toast({ title: "Invalid parameters in URL.", variant: "destructive" });
      navigate("/shop/payment-failed");
    }
  }, [dispatch, location, navigate, toast, orderDetails]); // Add orderDetails to dependency array

  return (
    <Card>
      <CardHeader>
        <CardTitle>Processing Payment... Please wait!</CardTitle>
      </CardHeader>
    </Card>
  );
}

export default RazorpayReturnPage;