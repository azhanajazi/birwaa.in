import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white max-w-3xl w-full p-6 md:p-10 rounded-2xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-4">
          We’re here to assist you with any queries, feedback, or support you need. Reach out through any of the following channels.
        </p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-green-700">1. Customer Support</h2>
            <p><span className="font-medium">Email:</span> <a href="mailto:info.seneohl@gmail.com" className="text-green-600 font-medium">info.seneohl@gmail.com</a></p>
            <p><span className="font-medium">Phone:</span> <a href="tel:+919560902196" className="text-green-600 font-medium">+91 95609 02196</a></p>
            <p><span className="font-medium">Working Hours:</span> Mon - Sat, 9:00 AM - 6:00 PM (excluding public holidays)</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">2. Visit Us</h2>
            <p>We are located in <span className="font-medium">Kanpur main city</span>. You’re welcome to visit us during business hours for in-person assistance.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">3. Contact Form</h2>
            <p>Fill out the contact form on our website with your name, email, subject, and message. We’ll get back to you within <span className="font-medium">24-48 hours</span>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">4. Plant Care Support</h2>
            <p>For personalized plant care tips, mention your query in the contact form or email us. Our plant experts will assist you promptly.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700">5. Feedback & Suggestions</h2>
            <p>We value your feedback. Share your thoughts to help us improve and serve you better.</p>
          </section>
        </div>

        <p className="text-center text-gray-500 mt-8">
          Thank you for choosing <span className="font-semibold text-green-600">Birwaa</span>. We’re dedicated to supporting your greenery journey!
        </p>
      </div>
    </div>
  );
};

export default Contact;
