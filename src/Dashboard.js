// src/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">Global Hyperloop Competition Dashboard</h1>
      </header>
      <main className="p-4">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Event Details</h2>
          <p className="text-gray-700">Join us for the Global Hyperloop Competition 1.0!</p>
          <p className="text-gray-700">Date: April 20, 2025</p>
          <p className="text-gray-700">Location: IIT Madras, India</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Registration</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
            Register Now
          </button>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-700">For any inquiries, please contact us at:</p>
          <p className="text-gray-700">Email: info@ghciitm.com</p>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2025 Global Hyperloop Competition. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
