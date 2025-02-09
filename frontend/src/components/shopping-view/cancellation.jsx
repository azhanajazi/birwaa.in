import React from "react";

const Cancellation = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white max-w-3xl w-full p-6 md:p-10 rounded-2xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-6">
          Cancellation & Refund Policy
        </h1>
        <p className="text-gray-600 text-center mb-4">
          Welcome to <span className="font-semibold text-green-600">Birwaa</span>! Your satisfaction is our priority. Please read our policy carefully.
        </p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-green-700">1. Order Cancellation</h2>
            <p><span className="font-medium">Before Shipment:</span> You can cancel your order within <span className="font-medium">24 hours</span> if it hasn’t been shipped. Contact our support team.</p>
            <p><span className="font-medium">After Shipment:</span> Cancellation is not possible, but you may initiate a return after receiving the product.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">2. Return Eligibility</h2>
            <ul className="list-disc pl-5">
              <li><span className="font-medium">Plants:</span> Return within <span className="font-medium">48 hours</span> of delivery in original condition. Mishandled plants are not accepted.</li>
              <li><span className="font-medium">Pots & Accessories:</span> Return within <span className="font-medium">7 days</span> if unused and in original packaging.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">3. Non-Returnable Items</h2>
            <ul className="list-disc pl-5">
              <li>Customized or personalized products.</li>
              <li>Sale items marked as non-returnable.</li>
              <li>Products damaged due to misuse.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">4. Refund Process</h2>
            <ul className="list-disc pl-5">
              <li><span className="font-medium">Inspection:</span> Returned items will be inspected upon receipt.</li>
              <li><span className="font-medium">Approval:</span> If approved, refunds will be processed within <span className="font-medium">7-10 business days</span>.</li>
              <li><span className="font-medium">Rejections:</span> If the return doesn’t meet our criteria, the product will be sent back without a refund.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">5. Shipping Costs</h2>
            <p>Shipping charges are non-refundable unless the return is due to our error.</p>
            <p>For eligible returns, customers are responsible for return shipping costs.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">6. Damaged or Defective Items</h2>
            <p>If you receive a damaged or defective item, contact us within <span className="font-medium">24 hours</span> of delivery with photos. We will arrange a replacement or refund.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">7. Contact Us</h2>
            <p>For cancellation, return, or refund queries, contact our customer support at <a href="mailto:info.seneohl@gmail.com" className="text-green-600 font-medium">info.seneohl@gmail.com</a>.</p>
          </section>
        </div>

        <p className="text-center text-gray-500 mt-8">
          Thank you for choosing <span className="font-semibold text-green-600">Birwaa</span>. We’re committed to making your greenery experience delightful!
        </p>
      </div>
    </div>
  );
};

export default Cancellation;
