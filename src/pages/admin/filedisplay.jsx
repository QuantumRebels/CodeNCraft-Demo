import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileRequestAdmin = () => {
  const currentUser=window.localStorage.getItem('InvertrekUsername')
  const Department=window.localStorage.getItem('InvertrekUserDepartment')

  const [requests, setRequests] = useState([])

    const fetchdata=async()=>{
        try {
            await axios.get(`${import.meta.env.VITE_DEV_URL}files/api/getallfiles`)
            .then(res=>{
                console.log(res.data)
                setRequests(res.data)
            })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        fetchdata()
    },[])

  // Sample data for file requests
  // const [requests, setRequests]

  // Function to handle the Accept action
  const handleAccept = async(fileid) => {
    // e.preventDefault()
    console.log(fileid)
    try {
      await axios.post(`${import.meta.env.VITE_DEV_URL}files/api/approve`,{fileid})
      .then(res=>{
        console.log(res.data)
        window.location.reload()
      })
    } catch (error) {
      console.error(error)
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

  return (
    <div className="file-request-admin">
      <h2>Manage File Requests</h2>
      <table className="file-request-table">
        <thead>
          <tr>
            <th>File Name</th>
            

            <th>Source Department</th>
            <th>Status</th>
            
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request,index) => (
            <tr key={index}>
              <td>{request.FileName}</td>
              <td>{request.SourceDept}</td>
              <td>{request.Status}</td>
              <td>
                {request.Status === 'Requested' ? (
                  <>
                    <button onClick={() => handleAccept(request._id)} className="accept-btn ml-96">Accept</button>
                    <button onClick={() => handleReject(request._id,request.FileName)} className="reject-btn ml-96">Reject</button>
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
