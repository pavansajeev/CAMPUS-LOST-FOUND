import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="relative w-full h-screen">

            <img
                src="/assets/bg-small.png"
                alt="Campus Lost and Found"
                className="w-full h-full object-cover"
            />

            {/* Buttons */}
            <div className="absolute left-24 top-[65%] flex gap-6">

                <button
                    onClick={() => navigate("/found")}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition"
                >
                    Lost Anything? Search here
                </button>

                <button
                    onClick={() => navigate("/lost")}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition"
                >
                    Found Anything? Search here
                </button>

            </div>

        </div>
    );
};

export default Home;