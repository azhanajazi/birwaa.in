import React from "react";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white max-w-3xl w-full p-6 md:p-10 rounded-2xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-6">
          Shipping & Delivery Policy
        </h1>
        <p className="text-gray-600 text-center mb-4">
          Welcome to <span className="font-semibold text-green-600">Birwaa</span>! We ensure your greenery reaches you in the best condition.
        </p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-green-700">1. Shipping Coverage</h2>
            <p>We deliver across <span className="font-medium">[Countries/Regions]</span>. Availability may vary based on location.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">2. Order Processing Time</h2>
            <p>Orders are processed within <span className="font-medium">1-3 business days</span> after payment confirmation.</p>
            <p>Orders placed on weekends or holidays will be processed on the next business day.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">3. Delivery Time</h2>
            <ul className="list-disc pl-5">
              <li><span className="font-medium">Standard Delivery:</span> 3-7 business days, depending on the destination.</li>
              <li><span className="font-medium">Express Delivery:</span> Available in select areas. Extra charges may apply.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">4. Shipping Charges</h2>
            <p>Shipping costs are calculated at checkout based on location and order weight.</p>
            <p><span className="font-medium">Free shipping</span> may be available for orders above a certain amount.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">5. Packaging</h2>
            <p>We use <span className="font-medium">eco-friendly & secure packaging</span> to protect plants, pots, and accessories during transit.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">6. Delivery Attempts</h2>
            <p>Our delivery partners will attempt to deliver your order <span className="font-medium">up to two times</span>.</p>
            <p>If unsuccessful, re-delivery may incur additional charges.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">7. Receiving Orders</h2>
            <p>Inspect your package upon delivery.</p>
            <p>Report any damage or discrepancies <span className="font-medium">within 24 hours</span> with supporting photos.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">8. Delays & Issues</h2>
            <p>Delays may occur due to weather, logistics, or holidays. We will keep you updated.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">9. International Shipping</h2>
            <p>Customs duties and taxes (if applicable) are the responsibility of the customer.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">10. Contact Us</h2>
            <p>For questions, reach out to us at <a href="mailto:info.birwaa@gmail.com" className="text-green-600 font-medium">info.birwaa@gmail.com</a>.</p>
          </section>
        </div>

        <p className="text-center text-gray-500 mt-8">
          Thank you for choosing <span className="font-semibold text-green-600">Birwaa</span>! We look forward to delivering greenery to your doorstep.
        </p>
      </div>
    </div>
  );
};

export default Shipping;
