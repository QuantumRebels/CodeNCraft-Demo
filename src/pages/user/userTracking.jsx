import React from 'react';
import FileTrackingTable from './userTrackingTable';

const userTracking = () => {
  // Sample data for the files
  const files = [
    { id: 'F001', department: 'Finance', location: 'Office 1', status: 'Pending' },
    { id: 'F002', department: 'HR', location: 'Office 2', status: 'Approved' },
    { id: 'F003', department: 'IT', location: 'Server Room', status: 'In Progress' },
    { id: 'F004', department: 'Marketing', location: 'Office 3', status: 'Pending' },
    { id: 'F005', department: 'Legal', location: 'Office 4', status: 'Completed' }
  ];

  return (
    <div className="App">
      <h1 className='text-center align-middle items-center mt-8 mb-10 text-4xl'>Current Status</h1>
      <FileTrackingTable files={files} />
    </div>
  );
};

export default userTracking;
