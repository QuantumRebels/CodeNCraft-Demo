import React, { useState } from 'react';

const RequestFileForm = ({ setFiles }) => {
  const [formData, setFormData] = useState({
    fileId: '',
    department: '',
    reason: '',
    requestDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFile = { ...formData, status: 'pending approval' };
    setFiles((prevFiles) => [...prevFiles, newFile]);
    setFormData({ fileId: '', department: '', reason: '', requestDate: '' });
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg mt-8 flex justify-center align-middle items-center flex-col">
      <h2 className="text-4xl text-center align-middle items-center  font-semibold mb-4">Request a File</h2>
      <form onSubmit={handleSubmit} className='request-file mt-12'>
      
        <div className="mb-4">
          <label className="block">Department</label>
          <input
            type="text"
            name="department"
            className="border p-2 rounded-md w-full"
            value={formData.department}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block">Reason for Request</label>
          <textarea
            name="reason"
            className="border p-2 rounded-md w-full"
            value={formData.reason}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block">Request Date</label>
          <input
            type="date"
            name="requestDate"
            className="border p-2 rounded-md w-full"
            value={formData.requestDate}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-[#114fee] text-white px-4 py-2 rounded-md mt-8 ml-96"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default RequestFileForm;
