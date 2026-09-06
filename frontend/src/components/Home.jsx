import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="relative w-full h-screen">

            <img
                src="/assets/bg-new.png"
                alt="Campus Lost and Found"
                className="w-full h-full object-cover"
            />

            {/* Buttons */}
            <div className="absolute right-10 top-[65%] flex gap-6 p-15">

                <button
                    onClick={() => navigate("/found")}
                    className="bg-[#b8b099] hover:bg-[#927f48] text-[#0a1931] font-semibold px-8 py-4 rounded-xl shadow-lg transition"
                >
                    🔍I lost something
                </button>

                <button
                    onClick={() => navigate("/lost")}
                    className="bg-[#0a1931] hover:bg-[#6a93d5] text-[#b8b099] font-semibold px-8 py-4 rounded-xl shadow-lg transition"
                >
                    I found something👀
                </button>

            </div>

        </div>
    );
};

export default Home;