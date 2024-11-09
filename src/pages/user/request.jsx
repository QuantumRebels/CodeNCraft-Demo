import React from 'react';

const FileStatusTable = () => {
  // Data for each file
  const fileData = [
    { id: 'F001', department: 'Finance', location: 'Office 1', status: 'Pending' },
    { id: 'F002', department: 'HR', location: 'Office 2', status: 'Approved' },
    { id: 'F003', department: 'IT', location: 'Server Room', status: 'In Progress' },
    { id: 'F004', department: 'Marketing', location: 'Office 3', status: 'Pending' },
    { id: 'F005', department: 'Legal', location: 'Office 4', status: 'Completed' },
  ];

  const handleRequestClick = (fileId) => {
    alert(`Request sent for file ${fileId}`);
  };

  return (
    <div className="table-container">
      <h2>Claim Files</h2>
      <table className="status-table">
        <thead>
          <tr>
            <th>File ID</th>
            <th>Department</th>
            <th>Current Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fileData.map((file) => (
            <tr key={file.id}>
              <td className='text-gray-900'>{file.id}</td>
              <td className='text-gray-900'>{file.department}</td>
              <td className='text-gray-900'>{file.location}</td>
              <td className='text-gray-900'>{file.status}</td>
              
              <td>
                <button 
                  className="request-link" 
                  onClick={() => handleRequestClick(file.id)}
                >
                  Request
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileStatusTable;
