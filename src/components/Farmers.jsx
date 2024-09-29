import React from "react";

const FarmersPage = () => {
  const farmers = [
    {
      name: "John Doe",
      description:
        "Experienced cattle farmer with over 10 years in the industry.",
      URL: "https://cdn.pixabay.com/photo/2021/04/25/14/30/man-6206540_1280.jpg",
    },
    {
      name: "Jane Smith",
      description: "Specializes in sheep farming and organic wool production.",
      URL: "https://cdn.pixabay.com/photo/2015/06/04/12/05/woman-797394_1280.jpg",
    },
    {
      name: "Michael Johnson",
      description: "Raising free-range chickens and selling organic eggs.",
      URL: "https://cdn.pixabay.com/photo/2024/03/07/11/35/person-8618424_1280.png",
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
              src={farmer.URL}
              alt={`Livestock of ${farmer.name}`}
              style={{ maxHeight: "150px" }}
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
