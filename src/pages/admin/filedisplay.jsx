import React, { useState } from 'react';

const FileRequestAdmin = () => {
  // Sample data for file requests
  const [requests, setRequests] = useState([
    { id: 'F001', department: 'Finance', currentLocation: 'Office 1', status: 'Pending' },
    { id: 'F002', department: 'HR', currentLocation: 'Office 2', status: 'Pending' },
    { id: 'F003', department: 'IT', currentLocation: 'Server Room', status: 'Pending' },
    { id: 'F004', department: 'Marketing', currentLocation: 'Office 3', status: 'Pending' },
    { id: 'F005', department: 'Legal', currentLocation: 'Office 4', status: 'Pending' },
  ]);

  // Function to handle the Accept action
  const handleAccept = (fileId) => {
    setRequests(requests.map(request =>
      request.id === fileId ? { ...request, status: 'Approved' } : request
    ));
  };

  // Function to handle the Reject action
  const handleReject = (fileId) => {
    setRequests(requests.map(request =>
      request.id === fileId ? { ...request, status: 'Rejected' } : request
    ));
  };

  return (
    <div className="file-request-admin">
      <h2>Manage File Requests</h2>
      <table className="file-request-table">
        <thead>
          <tr>
            <th>File ID</th>
            <th>Department</th>
            
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.department}</td>
              <td>
                {request.status === 'Pending' ? (
                  <>
                    <button onClick={() => handleAccept(request.id)} className="accept-btn ml-96">Accept</button>
                    <button onClick={() => handleReject(request.id)} className="reject-btn ml-96">Reject</button>
                  </>
                ) : (
                  <span>{request.status}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileRequestAdmin;
