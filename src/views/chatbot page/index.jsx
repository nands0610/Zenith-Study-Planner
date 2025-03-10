import React from "react";
import Navbar from "../../component/common/navbar";
import Chatbot from "../../component/Chatbot";
import FileUpload from "../../component/FileUpload"; // Ensure FileUpload is imported
import { Link } from "react-router-dom";

const ChatbotPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center p-6">

      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
          <Chatbot /> {/* Chatbot component */}
      </div>

        {/* File Upload Component */}
        <FileUpload /> 



        <Link to="/home">
          <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChatbotPage;
