import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const LostReports = () => {

    const { id } = useParams();

    const [reports, setReports] = useState([]);

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {

        try {

            const response = await axios.get(
                `http://localhost:3000/foundreports/item/${id}`
            );

            setReports(response.data.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="max-w-4xl mx-auto mt-10">

            <h1 className="text-3xl font-bold mb-6">
                Found Reports
            </h1>

            {
                reports.length === 0 ? (

                    <p>No reports received.</p>

                ) : (

                    reports.map(report => (

                        <div
                            key={report._id}
                            className="bg-white shadow-lg rounded-xl p-5 mb-5"
                        >

                            <h2 className="text-xl font-bold">
                                {report.name}
                            </h2>

                            <p>
                                <strong>Description:</strong> {report.description}
                            </p>

                            <p>
                                <strong>Contact:</strong> {report.contactInfo}
                            </p>

                            <p>
                                <strong>Username:</strong> {report.senderId.username}
                            </p>

                            <p>
                                <strong>Email:</strong> {report.senderId.email}
                            </p>


                        </div>

                    ))

                )
            }

        </div>

    );

};

export default LostReports;