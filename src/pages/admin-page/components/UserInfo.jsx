import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import { useState } from "react";

export default function UserInfo() {
    const navigate = useNavigate(); // Redirect qilish uchun
    const clients = [
        {
            id: 1,
            name: "Temurbek",
            surname: "Mirzayev",
            age: 20,
            phoneNumber: "+998930581233",
            img: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
        },
        {
            id: 2,
            name: "Anvar",
            surname: "Karimov",
            age: 22,
            phoneNumber: "+998930581234",
            img: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
        },
    ];

    const handleViewDetails = (id) => {
        navigate(`/user-info/${id}`); // Redirect to client details
    };

    return (
        <div className="user-info my-10 mx-5">
            <h3 className="flex items-center justify-center my-4 text-xl font-semibold">
                Client List
            </h3>

            {/* Clientlar ro'yxati */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {clients.map((client) => (
                    <Link to={`/user-info/${client.id}`}
                        key={client.id}
                        className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transform transition duration-300 hover:scale-105"
                    >
                        <img
                            src={client.img}
                            alt={client.name}
                            className="w-24 h-24 mx-auto rounded-full"
                        />
                        <h4 className="text-center text-lg font-bold mt-3">
                            {client.name} {client.surname}
                        </h4>
                        <p className="text-center text-gray-500">Age: {client.age}</p>
                        <p className="text-center text-gray-500">
                            Phone: {client.phoneNumber}
                        </p>
                        <button
                            onClick={() => handleViewDetails(client.id)}
                            className="block text-center text-blue-500 mt-4 underline"
                        >
                            View Details
                        </button>
                    </Link>
                ))}
            </div>

        </div>
    );
}
