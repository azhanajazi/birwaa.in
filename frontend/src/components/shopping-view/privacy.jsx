import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white max-w-3xl w-full p-6 md:p-10 rounded-2xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-center mb-4">
          Welcome to <span className="font-semibold text-green-600">Birwaa</span>! Your privacy is important to us. This policy explains how we handle your information.
        </p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-green-700">1. Information We Collect</h2>
            <ul className="list-disc pl-5">
              <li><span className="font-medium">Personal Information:</span> Name, email, phone number, address, and payment details when you place an order.</li>
              <li><span className="font-medium">Non-Personal Information:</span> Browser type, IP address, and usage data to improve services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5">
              <li>To process and fulfill your orders.</li>
              <li>To improve our website and services.</li>
              <li>To communicate with you about orders, promotions, and plant care support.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">3. Sharing of Information</h2>
            <p>We <span className="font-medium">do not sell</span> your personal information. We may share it with third-party service providers for payment processing and delivery services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">4. Data Security</h2>
            <p>We implement security measures to protect your personal information from unauthorized access or disclosure.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">5. Your Choices</h2>
            <p>You can update your personal information or opt out of promotional communications anytime by contacting us.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">6. Cookies & Tracking</h2>
            <p>We use cookies to enhance your experience and analyze traffic. You can manage cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">7. Changes to This Policy</h2>
            <p>We may update this policy periodically. Changes will be effective immediately upon posting.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">8. Contact Us</h2>
            <p>For any privacy concerns, email us at <a href="mailto:info.birwaa@gmail.com" className="text-green-600 font-medium">info.birwaa@gmail.com</a>.</p>
          </section>
        </div>

        <p className="text-center text-gray-500 mt-8">
          Thank you for trusting <span className="font-semibold text-green-600">Birwaa</span> with your greenery needs!
        </p>
      </div>
    </div>
  );
};

export default Privacy;
