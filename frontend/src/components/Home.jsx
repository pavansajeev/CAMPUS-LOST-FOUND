import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="relative w-full h-screen">

            <img
                src="/src/assets/bgnew.png"
                alt="Campus Lost and Found"
                className="w-full h-full object-cover"
            />

            {/* Buttons */}
            <div className="absolute left-1/2 top-[65%] -translate-x-1/2 flex gap-6">

    <button
        onClick={() => navigate("/found")}
        className="bg-[#b8b099] hover:bg-[#927f48] text-[#0a1931] font-semibold px-8 py-4 rounded-xl shadow-lg transition"
    >
        I Lost Something
    </button>

    <button
        onClick={() => navigate("/lost")}
        className="bg-[#0a1931] hover:bg-[#1d64d7] text-[#b8b099] font-semibold px-8 py-4 rounded-xl shadow-lg transition"
    >
        I Found Something
    </button>

</div>

        </div>
    );
};

export default Home;