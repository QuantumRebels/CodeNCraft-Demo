import React from 'react';

const FileTrackingTable = ({ files = [] }) => {
  return (
    <div className="overflow-x-auto ml-72 px-4 bg-white shadow-md rounded-lg tracking-table">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">File ID</th>
            <th className="px-4 py-2 text-left">Department</th>
            <th className="px-4 py-2 text-left">Current Location</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.id}>
              <td className="px-4 py-2">{file.id}</td>
              <td className="px-4 py-2">{file.department}</td>
              <td className="px-4 py-2">{file.location}</td>
              <td className="px-4 py-2">{file.status}</td>
              <td className="px-4 py-2">
                <button className="text-blue-500 hover:text-blue-700">Request</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileTrackingTable;
