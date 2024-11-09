import React from 'react';

const OutOfStockTable = () => {
  // Data for each item in the stock
  const itemData = [
    { id: 'S001', name: 'Pens', department: 'Physics Lab', location: 'Lab Room 1', inStock: false },
    { id: 'S002', name: 'Notebooks', department: 'Chemistry Lab', location: 'Lab Room 2', inStock: true },
    { id: 'S003', name: 'Markers', department: 'Computer Lab', location: 'Lab Room 3', inStock: false },
    { id: 'S004', name: 'Staplers', department: 'Biology Lab', location: 'Lab Room 4', inStock: true },
    { id: 'S005', name: 'Highlighters', department: 'Electronics Lab', location: 'Lab Room 5', inStock: false },
  ];

  // Filter out the items that are not in stock
  const outOfStockItems = itemData.filter(item => !item.inStock);

  return (
    <div className="w-full ">
      <h2 className='text-2xl font-semibold'>Out of Stock Items</h2>
      <table className="status-table">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Department</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {outOfStockItems.length > 0 ? (
            outOfStockItems.map((item) => (
              <tr key={item.id}>
                <td className="text-gray-900">{item.id}</td>
                <td className="text-gray-900">{item.name}</td>
                <td className="text-gray-900">{item.department}</td>
                <td className="text-gray-900">{item.location}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-gray-500">All items are in stock</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OutOfStockTable;
