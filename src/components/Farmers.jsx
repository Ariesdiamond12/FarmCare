import React from "react";

const FarmersPage = () => {
  const farmers = [
    {
      name: "John Doe",
      description:
        "Experienced cattle farmer with over 10 years in the industry.",
      URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPKc8RamLD1Km3mufQjH1_LLFWRU05clnWw&s",
    },
    {
      name: "Jane Smith",
      description: "Specializes in sheep farming and organic wool production.",
      URL: "https://previews.123rf.com/images/schwingkopf/schwingkopf1101/schwingkopf110100002/8808902-modern-middle-aged-blonde-female-portrait-on-white.jpg",
    },
    {
      name: "Michael Johnson",
      description: "Raising free-range chickens and selling organic eggs.",
      URL: "https://i.pinimg.com/736x/4d/3f/68/4d3f68afd3261287d92c1ee794f947c2.jpg",
    },
    // Add more farmers as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Livestock Farmers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {farmers.map((farmer, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover"
              src={farmer.image}
              alt={`Livestock of ${farmer.name}`}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{farmer.name}</h2>
              <p className="text-gray-700">{farmer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmersPage;
