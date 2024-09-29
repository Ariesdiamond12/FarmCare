import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for HTTP requests
import Produce from "../assets/Produce.jpeg";
import { Input } from "@nextui-org/react";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full overflow-hidden">
      {/* Left Column */}
      <div className="flex flex-col justify-center ml-5">
        <form>
          <h2 className="text-2xl font-bold text-center mb-6">
            Donate Your Produce
          </h2>
          <div className="flex flex-col mb-4">
            {/* Personal Details */}
            <div className="flex gap-4 w-full">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="text-lg font-medium mb-2 block"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your Name"
                  className="p-3 w-full border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex-1">
                <label
                  htmlFor="surname"
                  className="text-lg font-medium mb-2 block"
                >
                  Surname
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="Enter your Surname"
                  className="p-3 w-full border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-4">
            {/* Produce Type */}
            <label htmlFor="produceType" className="text-lg font-medium mb-2">
              Type of Produce
            </label>
            <input
              type="text"
              id="produceType"
              name="produceType"
              value={formData.produceType}
              onChange={handleChange}
              placeholder="Enter type of produce (e.g., Wheat, Vegetables)"
              className="p-3 w-4/5 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Quantity Input */}
          <div className="flex flex-col mb-4">
            <label htmlFor="quantity" className="text-lg font-medium mb-2">
              Quantity (kg)
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Enter quantity in kilograms"
              className="p-3 w-4/5 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Additional Notes */}
          <div className="flex flex-col mb-4">
            <label htmlFor="notes" className="text-lg font-medium mb-2">
              Additional Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any special instructions or information"
              className="p-3 w-4/5 border border-gray-300 rounded-lg"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#008000] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#a6c48a] transition-colors duration-300"
            >
              Donate Produce
            </button>
          </div>
        </form>
      </div>

      {/* Right Column */}
      <div
        className="hidden sm:flex mx-3 my-2 rounded-xl items-center justify-center"
        style={{
          backgroundImage: `url(${Produce})`,
          backgroundSize: "cover",
          backgroundPosition: "center", // Ensures the background is centered
          height: "100%", // Ensures the div fills the entire height
        }}
      >
        <p className="text-[3rem] text-white text-center bg-black/50 p-4 rounded-lg">
          Make a difference in your community!
        </p>
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
