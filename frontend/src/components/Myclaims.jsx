import React, { useEffect, useState } from "react";
import axios from "axios";

const MyClaims = () => {

    const [claims, setClaims] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {

        fetchClaims();

    }, []);

    const fetchClaims = async () => {

        try {

            const response = await axios.get(
                `http://localhost:3000/myclaims/${user._id}`
            );

            console.log(response.data.data);

            setClaims(response.data.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="max-w-4xl mx-auto mt-10">

            <h1 className="text-3xl font-bold text-center mb-8">
                My Claim Requests
            </h1>

            {
                claims.length === 0 ? (

                    <p className="text-center text-xl">
                        No Claim Requests
                    </p>

                ) : (

                    claims.map((claim) => (

                        <div
                            key={claim._id}
                            className="bg-white shadow-lg rounded-xl p-5 mb-5"
                        >

                            <h2 className="text-xl font-bold">
                                {claim.foundItemId?.name || "Found item not available"}
                            </h2>

                            <p className="mt-2">
                                <b>Your Answer :</b> {claim.answer}
                            </p>

                            <p className="mt-2">
                                <b>Status :</b>

                                <span
                                    className={
                                        claim.status === "Pending"
                                            ? "text-yellow-600 font-bold ml-2"
                                            : claim.status === "Accepted"
                                            ? "text-green-600 font-bold ml-2"
                                            : "text-red-600 font-bold ml-2"
                                    }
                                >
                                    {claim.status}
                                </span>

                            </p>

                            {
                                claim.status === "Accepted" && (

                                    <div className="mt-4 border-t pt-3">

                                        <h3 className="font-bold text-green-700">
                                            Contact Details
                                        </h3>

                                         <p>
                                            <b>Name:</b> {claim.foundItemId?.userid?.username}
                                        </p>
                                        <p>
                                            {claim.foundItemId?.contactInfo || "Contact not available"}
                                        </p>

                                    </div>

                                )
                            }

                        </div>

                    ))

                )
            }

        </div>

    );

};

export default MyClaims;