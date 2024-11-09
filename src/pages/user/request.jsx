
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileStatusTable = () => {
  const [fileData, setFiledata] = useState([])
  const currentuser=window.localStorage.getItem('InvertrekUsername')
  const dept=window.localStorage.getItem('InvertrekUserDepartment')
  const [isModalOpen, setIsModalOpen] = useState(false)


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

  const handleDetailsClick = async(id) => {
    console.log(id)
    try {
      await axios.get(`${import.meta.env.VITE_DEV_URL}files/api/details`,{id})
      .then(res=>{
        console.log(res.data)
        setSelectedFile(res.data)
        setIsModalOpen(true);
        
      })
    } catch (error) {
      console.log(error)
    }
    
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFile(null);
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold p-4">Claim Files</h2>
      <table className="status-table">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Department</th>
            <th>Current Location</th>
            <th>Status</th>
            <th>Actions</th>
            <th>Details</th>
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
              <td>
                <button
                  className="details-link"
                  onClick={() => handleDetailsClick(file._id)}
                >
                  {/* <BsPlus className="text-orange-500 text-2xl" /> Display "+" icon here */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for file details */}
      {isModalOpen && selectedFile && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h3 className="text-2xl font-semibold mb-4 text-black">File Details</h3>
            <p className='text-black'><strong>File ID:</strong> {selectedFile._id}</p>
            <p className='text-black'><strong>Owned By:</strong> {selectedFile.SourceDept}</p>
            <p className='text-black'><strong>Department:</strong> {selectedFile.Department}</p>
            <p className='text-black'><strong>Location:</strong> {selectedFile.Location}</p>
            <p className='text-black'><strong>Status:</strong> {selectedFile.Status}</p>
            <p className='text-black'><strong>Description:</strong> {selectedFile.FileDescription}</p>
            {/* <p className='text-black'><strong>Description:</strong> {selectedFile.description}</p> */}
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

export default FileStatusTable;
