import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileStatusTable = () => {
  const [fileData, setFiledata] = useState([])
  const currentuser=window.localStorage.getItem('InvertrekUsername')
  const dept=window.localStorage.getItem('InvertrekUserDepartment')


  const fetchfiles=async()=>{
    try {
      await axios.get(`${import.meta.env.VITE_DEV_URL}files/api/getallfiles`)
      .then(response => {
        console.log(response.data)
        setFiledata(response.data)

      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchfiles()
  },[])
  // Data for each file
  

  const handleRequestClick = (id) => {
    console.log(id)

    try {
      axios.post(`${import.meta.env.VITE_DEV_URL}files/api/request`,{id,currentuser,dept})
      .then(res=>{
        console.log(res.data)
        alert(res.data)
        window.location.reload()
      })
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="table-container">
      <h2>Claim Files</h2>
      <table className="status-table">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Department</th>
            <th>Current Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fileData.map((file) => (
            <tr key={file.id}>
              <td className='text-gray-900'>{file.FileName}</td>
              <td className='text-gray-900'>{file.SourceDept}</td>
              <td className='text-gray-900'>{file.SourceDept} Office</td>
              <td className='text-gray-900'>{file.Status}</td>
              
              <td>
                {(file.Status !=='pending')? (
                  <p className="text-black font-bold">
                    Requested
                  </p>
                ):(
                  <button 
                  className="request-link" 
                  onClick={() => handleRequestClick(file._id)}
                >
                  Request
                </button>
                )}
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileStatusTable;
