import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';

const FileStatusTable = () => {
  // Data for each file
  const fileData = [
    {
      id: 'F001',
      department: 'Finance',
      location: 'Office 1',
      status: 'Pending',
      owner: 'John Doe',
      contents: 'Budget Reports',
      description: 'Monthly budget reports and analysis for Q1.',
    },
    {
      id: 'F002',
      department: 'HR',
      location: 'Office 2',
      status: 'Approved',
      owner: 'Jane Smith',
      contents: 'Employee Records',
      description: 'Employee records and payroll information.',
    },
    {
      id: 'F003',
      department: 'IT',
      location: 'Server Room',
      status: 'In Progress',
      owner: 'Michael Johnson',
      contents: 'Server Maintenance Logs',
      description: 'Logs for server maintenance and updates.',
    },
    {
      id: 'F004',
      department: 'Marketing',
      location: 'Office 3',
      status: 'Pending',
      owner: 'Alice Brown',
      contents: 'Campaign Plans',
      description: 'Plans for upcoming marketing campaigns.',
    },
    {
      id: 'F005',
      department: 'Legal',
      location: 'Office 4',
      status: 'Completed',
      owner: 'Sarah Wilson',
      contents: 'Contracts',
      description: 'Signed contracts and agreements.',
    },
  ];

  // State to handle modal visibility and selected file
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleRequestClick = (fileId) => {
    alert(`Request sent for file ${fileId}`);
  };

  const handleDetailsClick = (file) => {
    setSelectedFile(file);
    setIsModalOpen(true);
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
            <th>File ID</th>
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
              <td className="text-gray-900">{file.id}</td>
              <td className="text-gray-900">{file.department}</td>
              <td className="text-gray-900">{file.location}</td>
              <td className="text-gray-900">{file.status}</td>
              <td>
                <button
                  className="request-link mr-2"
                  onClick={() => handleRequestClick(file.id)}
                >
                  Request
                </button>
              </td>
              <td>
                <button
                  className="details-link"
                  onClick={() => handleDetailsClick(file)}
                >
                  <BsPlus className="text-orange-500 text-2xl" /> {/* Display "+" icon here */}
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
            <p className='text-black'><strong>File ID:</strong> {selectedFile.id}</p>
            <p className='text-black'><strong>Owned By:</strong> {selectedFile.owner}</p>
            <p className='text-black'><strong>Department:</strong> {selectedFile.department}</p>
            <p className='text-black'><strong>Location:</strong> {selectedFile.location}</p>
            <p className='text-black'><strong>Status:</strong> {selectedFile.status}</p>
            <p className='text-black'><strong>Contents:</strong> {selectedFile.contents}</p>
            <p className='text-black'><strong>Description:</strong> {selectedFile.description}</p>
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
