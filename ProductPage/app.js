const products = [
  {
    name: "Product 1",
    price: "$10",
    image: "https://via.placeholder.com/150",
    description: "This is a great product.",
  },
  {
    name: "Product 2",
    price: "$15",
    image: "https://via.placeholder.com/150",
    description: "You will love this product.",
  },
  {
    name: "Product 3",
    price: "$20",
    image: "https://via.placeholder.com/150",
    description: "Best product for daily use.",
  },
];

const productContainer = document.getElementById("products");

products.forEach((product) => {
  productContainer.innerHTML += `
                <div class="bg-white p-4 rounded-lg shadow">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover rounded">
                    <h2 class="text-lg font-semibold mt-2">${product.name}</h2>
                    <p class="text-gray-600">${product.description}</p>
                    <p class="text-lg font-bold">${product.price}</p>
                    <button class="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Buy Now</button>
                </div>
            `;
});
