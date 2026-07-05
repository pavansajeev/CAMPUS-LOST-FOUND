import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const MyLost = () => {

    const [items, setItems] = useState([]);
    const navigate=useNavigate()

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {

        try {

            const response = await axios.get("http://localhost:3000/lost");

            const myItems = response.data.data.filter(
                item => item.userid === user._id
            );

            setItems(myItems);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="mt-10">

            <h1 className="text-3xl text-center mb-6">
                My Lost Items
            </h1>

            <div className="grid md:grid-cols-2 gap-5">

                {
                    items.length > 0 ? (

                        items.map(item => (

                            <div
                                key={item._id}
                                className="bg-white shadow-lg p-5 rounded-xl"
                            >

                                {item.image && (
                                    <img
                                        src={`http://localhost:3000${item.image}`}
                                        alt={item.name}
                                        className="w-full h-48 object-cover rounded-lg mb-3"
                                    />
                                )}

                                <h2 className="text-xl font-bold">
                                    {item.name}
                                </h2>

                                <p>{item.description}</p>

                                <p>
                                    <strong>Location:</strong> {item.location}
                                </p>

                                <p>
                                    <strong>Date:</strong>{" "}
                                    {new Date(item.date).toLocaleDateString()}
                                </p>
                                <button
                                    onClick={() => navigate(`/lostreports/${item._id}`)}
                                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                                >
                                    View Found Reports
                                </button>

                            </div>

                        ))

                    ) : (

                        <p className="text-center col-span-2">
                            No lost items found.
                        </p>

                    )
                }

            </div>

        </div>

    );

};

export default MyLost;