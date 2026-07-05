import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewClaims = () => {

    const { id } = useParams();

    const [claims, setClaims] = useState([]);

    const fetchClaims = async () => {

        try {

            const response = await axios.get(
                `http://localhost:3000/claimrequest/item/${id}`
            );

            console.log(response.data);

            setClaims(response.data.data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        fetchClaims();

    }, []);

    const acceptClaim = async (claimId) => {

        try {

            const response = await axios.put(
                `http://localhost:3000/claimrequest/accept/${claimId}`
            );

            alert(response.data.message);

            fetchClaims();

        } catch (error) {

            console.log(error);

        }

    };

    const rejectClaim = async (claimId) => {

        try {

            const response = await axios.put(
                `http://localhost:3000/claimrequest/reject/${claimId}`
            );

            alert(response.data.message);

            fetchClaims();

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="max-w-4xl mx-auto mt-10">

            <h1 className="text-3xl font-bold text-center mb-8">
                Claim Requests
            </h1>

            {
                claims.length === 0 ? (

                    <p className="text-center text-xl">
                        No Claim Requests Found
                    </p>

                ) : (

                    claims.map((claim) => (

                        <div
                            key={claim._id}
                            className="bg-white shadow-lg rounded-xl p-5 mb-5"
                        >

                            <h2 className="text-xl font-bold">
                                {claim.claimantId.username}
                            </h2>

                            <p className="mt-2">
                                <b>Answer :</b> {claim.answer}
                            </p>

                            <p className="mt-2">
                                <b>Status :</b> {claim.status}
                            </p>

                            {
                                claim.status === "Pending" && (

                                    <div className="flex gap-4 mt-4">

                                        <button
                                            onClick={() => acceptClaim(claim._id)}
                                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                                        >
                                            Accept
                                        </button>

                                        <button
                                            onClick={() => rejectClaim(claim._id)}
                                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                                        >
                                            Reject
                                        </button>

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

export default ViewClaims;