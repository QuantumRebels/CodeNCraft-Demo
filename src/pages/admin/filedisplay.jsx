import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileRequestAdmin = () => {

  const currentUser=window.localStorage.getItem('InvertrekUsername')
  const Department=window.localStorage.getItem('InvertrekUserDepartment')

  // State for file requests
  const [requests, setRequests] = useState([]);


  // State for modal visibility and selected request
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_DEV_URL}files/api/getallfiles`);
      console.log(res)
      // Ensure requests are set to an array
      setRequests(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle the Accept action
  const handleAccept = async (fileid) => {
    console.log(fileid)
    
    try {

      await axios.post(`${import.meta.env.VITE_DEV_URL}files/api/approve`,{fileid,currentUser,Department})
      .then(res=>{
        console.log(res.data)
        window.location.reload()
      })

    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle the Reject action
  const handleReject = async(id,FileName) => {
    console.log(id)
    try {
      await axios.post(`${import.meta.env.VITE_DEV_URL}files/api/reject`,{id,currentUser,Department,FileName})
      .then(res=>{
        console.log(res.data)
        window.location.reload()
      })
    } catch (error) {
      console.error(error)
    }
  };

  // Function to open the modal with details
  const handleDetailsClick = async(id) => {

    setIsModalOpen(true);
    console.log(id)
    try {
      await axios.get(`${import.meta.env.VITE_DEV_URL}files/api/details`,{id})
      .then(res=>{
        console.log(res.data)
        setSelectedRequest(res.data)
        
      })
    } catch (error) {
      console.log(error)
    }
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
            <th>File Name</th>
            <th>Initiator Name</th>
            <th>Actions</th>
            <th>Requested By</th>

            <th>Details</th>
          </tr>
        </thead>
        <tbody>
           { requests.map((request,index) => (
            <tr key={index}>
              <td>{request.FileName}</td>
              <td>{request.InitiatorName}</td>
              <td>

                {request.Status === 'Requested' ? (
                  <>
                    <button onClick={() => handleAccept(request._id)} className="accept-btn ml-96">Accept</button>
                    <button onClick={() => handleReject(request._id,request.FileName)} className="reject-btn ml-96">Reject</button>

                  </>
                ) : (
                  <span>{request.Status}</span>
                )}
              </td>
              
              <td>{request.RequestedBy}</td>
              <td>
                <button onClick={() => handleDetailsClick(request._id)} className="details-link">
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
            <p className="text-black"><strong>File ID:</strong> {selectedRequest._id}</p>
            <p className="text-black"><strong>Department:</strong> {selectedRequest.Department}</p>
            <p className="text-black"><strong>Current Location:</strong> {selectedRequest.Location}</p>
            <p className="text-black"><strong>Status:</strong> {selectedRequest.Status}</p>
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
