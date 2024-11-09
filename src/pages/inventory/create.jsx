import React, { useState } from 'react';

const OrderItemModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemId, setItemId] = useState("");
  const [itemName, setItemName] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setItemId("");
    setItemName("");
    setDepartment("");
    setLocation("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      // Implement order submission logic here (e.g., API call)
      // Placeholder alert for successful submission
      alert("Order submitted successfully!");
      closeModal();
    } catch (error) {
      setError("Failed to submit the order. Please try again.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div>
      <button onClick={openModal} className="order-btn bg-blue-500 text-white px-4 py-2 rounded">
        Order Item
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-bold text-center mb-4">Order Item</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Item ID</label>
                <input
                  type="text"
                  value={itemId}
                  onChange={(e) => setItemId(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Item Name</label>
                <input
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Department</label>
                <input
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loader}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-4"
              >
                {loader ? "Submitting..." : "Submit Order"}
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="w-full bg-gray-300 text-gray-700 px-4 py-2 rounded mt-2"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderItemModal;
