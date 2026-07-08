import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ReportFound = () => {

    const { id } = useParams(); // Lost Item ID

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const [lostItem, setLostItem] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        contactInfo: ""
    });

    useEffect(() => {
        fetchLostItem();
    }, []);

    const fetchLostItem = async () => {
        try {

            const response = await axios.get(
                `http://localhost:3000/lost/${id}`
            );

            setLostItem(response.data.data);

        } catch (error) {

            console.log(error);

        }
    };

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async () => {

        if (
            !formData.name ||
            !formData.description ||
            !formData.contactInfo
        ) {
            alert("Please fill all fields.");
            return;
        }

        try {

            const response = await axios.post(
                "http://localhost:3000/foundreport",
                {
                    lostItemId: lostItem._id,
                    senderId: user._id,
                    name: formData.name,
                    description: formData.description,
                    contactInfo: formData.contactInfo
                }
            );

            alert(response.data.message);

            navigate("/lost");

        } catch (error) {

            console.log(error);

            alert(error.response?.data?.message || "Failed to send report.");

        }

    };

    if (!lostItem) {
        return (
            <div className="text-center mt-10 text-xl">
                Loading...
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-6">

            
            <h1 className="text-3xl font-bold text-center mb-6">
                Report Found Item
            </h1>

            {/* Lost Item Details */}

            <div className="border rounded-lg p-5 mb-6">

                {lostItem.image && (
                    <img
                        src={`http://localhost:3000${lostItem.image}`}
                        alt={lostItem.name}
                        className="w-full h-60 object-cover rounded-lg mb-4"
                    />
                )}

                <h2 className="text-2xl font-bold">
                    {lostItem.name}
                </h2>

                <p className="mt-2">
                    <strong>Description:</strong> {lostItem.description}
                </p>

                <p className="mt-2">
                    <strong>Location:</strong> {lostItem.location}
                </p>

                <p className="mt-2">
                    <strong>Date:</strong>{" "}
                    {new Date(lostItem.date).toLocaleDateString()}
                </p>

            </div>

            {/* Report Form */}

            <div>

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 mb-4"
                />

                <textarea
                    name="description"
                    placeholder="Describe where/how you found the item"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 mb-4"
                    rows={4}
                />

                <input
                    type="text"
                    name="contactInfo"
                    placeholder="Phone Number / Email"
                    value={formData.contactInfo}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 mb-6"
                />

                <button
                    onClick={handleSubmit}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
                >
                    Submit Report
                </button>

            </div>

        </div>
    );
};

export default ReportFound;