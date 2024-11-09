import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileRequestAdmin = () => {
  // State for file requests
  const [requests, setRequests] = useState([]);

  // State for modal visibility and selected request
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_DEV_URL}files/api/getallfiles`);
      // Ensure requests are set to an array
      setRequests(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle the Accept action
  const handleAccept = async (fileId) => {
    try {
      const res = await axios.put(`${import.meta.env.VITE_DEV_URL}/files/api/approve`, { fileId });
      console.log(res.data);
      // Update the request status in local state after approval
      setRequests(requests.map(request =>
        request.id === fileId ? { ...request, status: 'Approved' } : request
      ));
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle the Reject action
  const handleReject = (fileId) => {
    setRequests(requests.map(request =>
      request.id === fileId ? { ...request, status: 'Rejected' } : request
    ));
  };

  // Function to open the modal with details
  const handleDetailsClick = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl p-4 font-semibold">Manage File Requests</h2>
      <table className="file-request-table">
        <thead>
          <tr>
            <th>File ID</th>
            <th>Department</th>
            <th>Actions</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(requests) && requests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.department}</td>
              <td>
                {request.status === 'Pending' ? (
                  <>
                    <button onClick={() => handleAccept(request.id)} className="accept-btn ml-2">Accept</button>
                    <button onClick={() => handleReject(request.id)} className="reject-btn ml-2">Reject</button>
                  </>
                ) : (
                  <span>{request.status}</span>
                )}
              </td>
              <td>
                <button onClick={() => handleDetailsClick(request)} className="details-link">
                  <span className="text-blue-500">+</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for request details */}
      {isModalOpen && selectedRequest && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h3 className="text-2xl text-black font-semibold mb-4">Request Details</h3>
            <p className="text-black"><strong>File ID:</strong> {selectedRequest.id}</p>
            <p className="text-black"><strong>Department:</strong> {selectedRequest.department}</p>
            <p className="text-black"><strong>Current Location:</strong> {selectedRequest.currentLocation}</p>
            <p className="text-black"><strong>Status:</strong> {selectedRequest.status}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileRequestAdmin;
