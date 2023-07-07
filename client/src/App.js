import { uploadFile } from "./services/api";
import "./App.css";
import React, { useRef, useState, useEffect } from "react";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="container">
      <img
        src="https://e0.pxfuel.com/wallpapers/161/269/desktop-wallpaper-foggy-city-lights-foggy-night.jpg"
        className="img"
      />
      <div className="wrapper">
        <h1>Simple File Sharing</h1>
        <p>Upload and share the download link</p>

        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <a href={result} target="_blank">
          {result}
        </a>
      </div>
    </div>
  );
}

export default App;
