// frontend/src/App.js
import React from 'react';
import UploadForm from './components/UploadForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Brain Tumor Classification</h1>
        <p>Upload an MRI image to classify the type of brain tumor.</p>
      </header>
      <main>
        <UploadForm />
      </main>
      <footer>
        <p>© 2024 Brain Tumor Classification. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
