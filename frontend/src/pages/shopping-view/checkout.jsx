import Address from "@/components/shopping-view/address";
import img from "../../assets/account.jpg";
import { useDispatch, useSelector } from "react-redux";
import UserCartItemsContent from "@/components/shopping-view/cart-items-content";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { createNewOrder, verifyRazorpayPayment } from "@/store/shop/order-slice";
import { useToast } from "@/components/ui/use-toast";

function ShoppingCheckout() {
  const { cartItems } = useSelector((state) => state.shopCart);
  const { user } = useSelector((state) => state.auth);
  const [currentSelectedAddress, setCurrentSelectedAddress] = useState(null);
  const [isPaymentStart, setIsPaymentStart] = useState(false);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const totalCartAmount = cartItems?.items?.reduce(
    (sum, currentItem) =>
      sum +
      (currentItem?.salePrice > 0
        ? currentItem?.salePrice
        : currentItem?.price) *
        currentItem?.quantity,
    0
  ) || 0;

  const handleInitiateRazorpayPayment = async () => {
    if (!cartItems?.items?.length) {
      toast({ title: "Your cart is empty!", variant: "destructive" });
      return;
    }

    if (!currentSelectedAddress) {
      toast({ title: "Please select an address!", variant: "destructive" });
      return;
    }

    const orderData = {
      userId: user?.id,
      cartId: cartItems?._id,
      cartItems: cartItems.items.map((item) => ({
        productId: item?.productId,
        title: item?.title,
        image: item?.image,
        price: item?.salePrice > 0 ? item?.salePrice : item?.price,
        quantity: item?.quantity,
      })),
      addressInfo: {
        addressId: currentSelectedAddress?._id,
        address: currentSelectedAddress?.address,
        city: currentSelectedAddress?.city,
        pincode: currentSelectedAddress?.pincode,
        phone: currentSelectedAddress?.phone,
        notes: currentSelectedAddress?.notes,
      },
      orderStatus: "pending",
      paymentMethod: "razorpay",
      paymentStatus: "pending",
      totalAmount: totalCartAmount,
      orderDate: new Date(),
      orderUpdateDate: new Date(),
    };

    setIsPaymentStart(true);

    try {
      const result = await dispatch(createNewOrder(orderData));

      if (createNewOrder.fulfilled.match(result)) {
        // Ensure Razorpay script is loaded
        if (typeof window !== "undefined" && window.Razorpay) {
          const rzp1 = new window.Razorpay({
            key_id: result.payload.key,  // Use correct key_id
            amount: result.payload.amount * 100,
            currency: "INR",
            name: "Your Business Name",
            description: "Payment for your order",
            order_id: result.payload.razorpayOrderId,
            handler: async function (response) {
              try {
                const verificationResult = await dispatch(verifyRazorpayPayment({
                  ...response,
                  orderId: result.payload.orderId
                }));

                if (verifyRazorpayPayment.fulfilled.match(verificationResult)) {
                  console.log("Payment Successful", verificationResult.payload);
                  toast({ title: "Payment Successful!", variant: "success" });
                  window.location.href = `${import.meta.env.VITE_API_URL}/shop/success`;
                } else {
                  console.error("Payment Verification Failed", verificationResult.error);
                  toast({ title: "Payment Failed!", variant: "destructive" });
                  window.location.href = `${import.meta.env.VITE_API_URL}/shop/cancel`;
                }
              } catch (error) {
                console.error("Verification Error:", error);
                toast({ title: "Payment verification failed!", variant: "destructive" });
                window.location.href = `${import.meta.env.VITE_API_URL}/shop/cancel`;
              }
            },
            prefill: {
              name: user?.name,
              email: user?.email,
              contact: currentSelectedAddress?.phone,
            },
            notes: {
              address: currentSelectedAddress?.address,
            },
            theme: {
              color: "#3399cc",
            },
            modal: {
              ondismiss: function () {
                console.log("User canceled the payment");
                toast({ title: "Payment Cancelled", variant: "destructive" });
                window.location.href = `${import.meta.env.VITE_API_URL}/shop/cancel`;
              },
            },
          });

          console.log(rzp1);
          rzp1.open();
        } else {
          console.error("Razorpay script not loaded correctly!");
          toast({ title: "Error loading Razorpay", variant: "destructive" });
        }
      } else {
        console.error("Order Creation Error:", result.error);
        toast({ title: "Error creating order", variant: "destructive" });
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      toast({ title: "Checkout Error", variant: "destructive" });
    } finally {
      setIsPaymentStart(false);
    }
  };

  return (
    <div>
      <div className="relative h-[300px] w-full overflow-hidden">
        <img src={img} className="h-full w-full object-cover object-center" alt="Checkout Background" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 p-5">
        <Address
          selectedId={currentSelectedAddress}
          setCurrentSelectedAddress={setCurrentSelectedAddress}
        />
        <div className="flex flex-col gap-4">
          {cartItems?.items?.map((item) => (
            <UserCartItemsContent cartItem={item} key={item.productId} />
          ))}
          <div className="mt-8 space-y-4">
            <div className="flex justify-between">
              <span className="font-bold">Total</span>
              <span className="font-bold">₹{totalCartAmount}</span>
            </div>
          </div>
          <div className="mt-4 w-full">
            <Button onClick={handleInitiateRazorpayPayment} className="w-full" disabled={isPaymentStart}>
              {isPaymentStart
                ? "Processing Razorpay Payment..."
                : "Checkout with Razorpay"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCheckout;
