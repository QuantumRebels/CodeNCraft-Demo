import React, { useState } from "react";


import axios from "axios";
const FileCreateDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileDescription, setFileDescription] = useState("");
  const [fileType, setFileType] = useState("");
  const [fileImage, setFileImage] = useState(null);
  const [message, setMessage] = useState("");

  const [ImageUrl, setImageUrl] = useState("");

  
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => {
    setIsDialogOpen(false);
    setMessage("");
    setFileName("");
    setFileDescription("");
    setFileType("");
    setFileImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle file creation logic here (e.g., API call)
    try {
      axios
        .post(`${import.meta.env.VITE_DEV_URL}files/api/create`, {
          fileName,
          fileDescription,
          fileType,
          ImageUrl,
          sourcedept: "Administrative",
          InitiatorName: "Chandan",
        })
        .then((res) => {
          console.log(res.data);
          window.location.reload();
        });
    } catch (error) {
      console.error(error);
    }
    setMessage("File created successfully!");
    setFileName("");
    setFileDescription("");
    setFileType("");
    setFileImage(null);
  };

  const handleFileChange = (e) => {
    setFileImage(e.target.files[0]);
  };

  return (
    <div>
      <button onClick={openDialog} className="open-dialog-btn">
        Create File
      </button>

      {isDialogOpen && (
        <div className="dialog-overlay" onClick={closeDialog}>
          <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
            <h2>Create File</h2>
            <form onSubmit={handleSubmit} className="file-create-form">
              <div className="form-group">
                <label>File Name:</label>
                <input
                  type="text"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>File Description:</label>
                <textarea
                  value={fileDescription}
                  onChange={(e) => setFileDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label>File Type:</label>
                <select
                  value={fileType}
                  onChange={(e) => setFileType(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select File Type
                  </option>
                  <option value="Sttudent records">Student records</option>
                  <option value="administrative files">
                    administrative files
                  </option>
                  <option value="inventory management files">
                    inventory management files
                  </option>
                  <option value="finance department files">
                    finance department files
                  </option>
                  <option value="human resource files">
                    human resource files
                  </option>
                </select>
              </div>
              {/* <div className="form-group">
                <label>Upload Image:</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                <button className="px-2 py-1 bg-blue-400" onClick={uploadImage}>
                  Upload
                </button>
              </div> */}
              <button type="submit" className="submit-btn">
                Create File
              </button>
              {message && <div className="message success">{message}</div>}
            </form>
            <button onClick={closeDialog} className="close-dialog-btn">
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileCreateDialog;
