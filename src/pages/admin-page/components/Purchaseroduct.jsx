import React from "react";

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

export default function Purchaseroduct() {
    return (
        <div className="bg-gray-100 py-10 px-5">
            <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Purchase product </h1>
            <div className="grid grid-cols-1   gap-6 bg-slate-200">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className=" rounded-lg  overflow-hidden  font-roboto transition-shadow duration-300 flex items-center px-4 border-b"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className=" w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="p-5 ">
                            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                            <div className="flex  items-center gap-4">
                                <p className="text-gray-600 mt-2">{product.description}</p>
                                <p className="text-lg font-bold text-gray-800 mt-4">{product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
