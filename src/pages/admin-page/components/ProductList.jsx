import React from "react";
import { Card } from "antd";
import "tailwindcss/tailwind.css";

const products = [
    {
        id: 1,
        name: "Product 1",
        description: "This is a short description of Product 1.",
        price: "$50",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Product 2",
        description: "This is a short description of Product 2.",
        price: "$60",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Product 3",
        description: "This is a short description of Product 3.",
        price: "$70",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 4,
        name: "Product 4",
        description: "This is a short description of Product 4.",
        price: "$80",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 5,
        name: "Product 5",
        description: "This is a short description of Product 5.",
        price: "$90",
        image: "https://via.placeholder.com/150",
    },
];

const ProductList = () => {
    return (
        <div className="bg-gray-100 py-10 px-5">
            <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Product List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5 ">
                            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                            <p className="text-gray-600 mt-2">{product.description}</p>
                            <p className="text-lg font-bold text-gray-800 mt-4">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;