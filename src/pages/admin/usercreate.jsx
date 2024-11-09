import React, { useState } from 'react';

const FileCreateDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileDescription, setFileDescription] = useState('');
  const [fileType, setFileType] = useState('');
  const [fileImage, setFileImage] = useState(null);
  const [message, setMessage] = useState('');

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => {
    setIsDialogOpen(false);
    setMessage('');
    setFileName('');
    setFileDescription('');
    setFileType('');
    setFileImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle file creation logic here (e.g., API call)
    setMessage('File created successfully!');
    setFileName('');
    setFileDescription('');
    setFileType('');
    setFileImage(null);
  };

  const handleFileChange = (e) => {
    setFileImage(e.target.files[0]);
  };

  return (
    <div>
      <button onClick={openDialog} className="open-dialog-btn">Create User</button>

      {isDialogOpen && (
        <div className="dialog-overlay" onClick={closeDialog}>
          <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
            <h2>Create New User</h2>
            <form onSubmit={handleSubmit} className="file-create-form">
              <div className="form-group">
                <label>User Name:</label>
                <input
                  type="text"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>User Designation :</label>
                <textarea
                  value={fileDescription}
                  onChange={(e) => setFileDescription(e.target.value)}
                  required
                ></textarea>
              </div>
            
             
              <div className="form-group">
                <label>Upload Image of User:</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </div>
              <button type="submit" className="submit-btn">Create User</button>
              {message && <div className="message success">{message}</div>}
            </form>
            <button onClick={closeDialog} className="close-dialog-btn">X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileCreateDialog;
