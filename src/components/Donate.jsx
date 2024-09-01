import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for HTTP requests
import Flower from "../assets/lotus.jpg";

function Donate() {
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [formData, setFormData] = useState({
    produceType: "",
    quantity: "",
    notes: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const data = {
      produceType: formData.produceType,
      quantity: formData.quantity,
      notes: formData.notes,
    };

    try {
      // Send form data to JSON Server
      const response = await axios.post(
        "http://localhost:3000/donations",
        data
      );

      // Show success message
      setMessageText("Your donation has been submitted successfully.");
      setShowMessage(true);

      // Navigate to another page after a delay (optional)
      setTimeout(() => {
        navigate("/thank-you"); // Redirect to a thank you page
      }, 2000); // Adjust the delay as needed
    } catch (error) {
      // Handle errors
      console.error("Error submitting donation:", error);
      setMessageText(
        "There was an error submitting your donation. Please try again."
      );
      setShowMessage(true);
    }

    // Reset form fields
    setFormData({
      produceType: "",
      quantity: "",
      notes: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-zinc-900/90 mix-blend-overlay bg-no-repeat relative bg-center"
      style={{ backgroundImage: `url(${Flower})` }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

      {/* Form Container */}
      <div className="flex justify-center items-center h-full relative z-10">
        <form
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-center">
            Donate Your Produce
          </h2>

          {/* Produce Type Input */}
          <div className="flex flex-col">
            <label htmlFor="produceType" className="text-lg font-medium">
              Type of Produce
            </label>
            <input
              type="text"
              id="produceType"
              name="produceType"
              value={formData.produceType}
              onChange={handleChange}
              placeholder="Enter type of produce (e.g., Wheat, Vegetables)"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Quantity Input */}
          <div className="flex flex-col">
            <label htmlFor="quantity" className="text-lg font-medium">
              Quantity (kg)
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Enter quantity in kilograms"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Additional Notes */}
          <div className="flex flex-col">
            <label htmlFor="notes" className="text-lg font-medium">
              Additional Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any special instructions or information"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#a6c48a] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#a6c48a] transition-colors duration-300"
            >
              Donate Produce
            </button>
          </div>
        </form>
      </div>

      {/* Pop-Up Message */}
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold">Notification</h3>
            <p className="mt-2">{messageText}</p>
            <button
              onClick={() => setShowMessage(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Donate;
