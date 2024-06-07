// frontend/src/components/UploadForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './UploadForm.css';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Display image preview
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-form">
        <h2>Upload Image</h2> 
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          {imagePreview && (
            <img src={imagePreview} alt="Uploaded" className="image-preview" />
          )}
          <button type="submit">Upload and Classify</button>
        </form>
        {prediction && <div className="prediction-result">Prediction: {prediction}</div>}
      </div>
    </div>
  );
}

export default UploadForm;
