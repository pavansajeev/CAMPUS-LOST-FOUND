import React, { useEffect, useState } from "react";
import axios from "axios";

const IncomingReports = () => {

    const [reports, setReports] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {

        try {

            const response = await axios.get(
                `http://localhost:3000/foundreports/${user._id}`
            );

            setReports(response.data.data);

        } catch (error) {

            console.log(error);

        }

    };

    const updateStatus = async (id, status) => {

        try {

            await axios.put(
                `http://localhost:3000/foundreport/${status}/${id}`
            );

            alert(`Report ${status}`);

            fetchReports();

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="max-w-5xl mx-auto mt-10">

            <h1 className="text-3xl font-bold text-center mb-6">
                Incoming Found Reports
            </h1>

            {
                reports.length === 0 ? (

                    <p className="text-center">
                        No reports received.
                    </p>

                ) : (

                    reports.map(report => (

                        <div
                            key={report._id}
                            className="bg-white rounded-xl shadow-lg p-6 mb-5"
                        >

                            <h2 className="text-2xl font-bold">
                                {report.lostItemId.name}
                            </h2>

                            <p className="mt-2">
                                <strong>Reported By :</strong>{" "}
                                {report.name}
                            </p>

                            <p>
                                <strong>Description :</strong>{" "}
                                {report.description}
                            </p>

                            <p>
                                <strong>Contact :</strong>{" "}
                                {report.contactInfo}
                            </p>

                            <p>
                                <strong>User Account :</strong>{" "}
                                {report.senderId.username}
                            </p>

                            <p>
                                <strong>Email :</strong>{" "}
                                {report.senderId.email}
                            </p>

                            <p className="mt-2">
                                <strong>Status :</strong>{" "}
                                {report.status}
                            </p>

                            {
                                report.status === "Pending" && (

                                    <div className="flex gap-4 mt-5">

                                        <button
                                            onClick={() =>
                                                updateStatus(report._id, "accept")
                                            }
                                            className="bg-green-600 text-white px-5 py-2 rounded-lg"
                                        >
                                            Accept
                                        </button>

                                        <button
                                            onClick={() =>
                                                updateStatus(report._id, "reject")
                                            }
                                            className="bg-red-600 text-white px-5 py-2 rounded-lg"
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

export default IncomingReports;