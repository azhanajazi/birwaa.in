import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white max-w-3xl w-full p-6 md:p-10 rounded-2xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-6">
          Terms of Service
        </h1>
        <p className="text-gray-600 text-center mb-4">
          Welcome to <span className="font-semibold text-green-600">Birwaa</span>! By using our website, you agree to these terms.
        </p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-green-700">1. Acceptance of Terms</h2>
            <p>By using our website, you agree to these Terms of Service. If you do not agree, please refrain from using our site.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">2. Services Offered</h2>
            <p>We offer indoor and outdoor plants, pots, and nursery services, including plant care support.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">3. User Responsibilities</h2>
            <p>Users must provide accurate information when placing orders and respect our intellectual property.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">4. Orders and Payments</h2>
            <p>Orders are subject to availability. Prices may change, and orders will be processed after payment confirmation.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">5. Shipping and Delivery</h2>
            <p>Delivery times may vary. Customers must provide accurate delivery information.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">6. Limitation of Liability</h2>
            <p>We are not liable for indirect or incidental damages related to the use of our products or website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">7. Changes to Terms</h2>
            <p>We may modify these Terms at any time, with changes effective immediately upon posting.</p>
          </section>
        </div>

        <p className="text-center text-gray-500 mt-8">
          Thank you for choosing <span className="font-semibold text-green-600">Birwaa</span>! Together, we grow greener.
        </p>
      </div>
    </div>
  );
};

export default Terms;
