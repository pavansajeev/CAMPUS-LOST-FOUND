import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-yellow-500 text-center py-6 mt-10">

            <p className="text-gray-800">
                © {new Date().getFullYear()} Campus Lost & Found
            </p>

            <Link
                to="/adminlogin"
                className="text-blue-700 hover:underline font-semibold mt-2 inline-block"
            >
                Admin Login
            </Link>

        </footer>
    );
};

export default Footer;