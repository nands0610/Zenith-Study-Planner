import React, { useState } from "react";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [clearStatus, setClearStatus] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://127.0.0.1:8000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("File upload failed.");
      }

      const data = await response.json();
      setUploadStatus(data.message);
    } catch (error) {
      console.error("Error:", error);
      setUploadStatus("Error uploading file.");
    }
  };

  const handleClearDocuments = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/clear", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to clear documents.");
      }

      const data = await response.json();
      setClearStatus(data.message);
    } catch (error) {
      console.error("Error:", error);
      setClearStatus("Error clearing documents.");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-bold">Upload a Document</h2>
      
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="border p-2 rounded-md"
      />

      <button 
        onClick={handleUpload} 
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Upload
      </button>

      {uploadStatus && <p className="text-gray-700">{uploadStatus}</p>}

      <button 
        onClick={handleClearDocuments} 
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Clear Documents
      </button>

      {clearStatus && <p className="text-gray-700">{clearStatus}</p>}
    </div>
  );
};

export default FileUpload;
