import React, { useState } from "react";

const InventoryTable = () => {
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("");

  const inventoryData = [
    
      { "id": 1, "name": "Whiteboard Marker", "department": "Academic Departments", "quantity": 30, "price": 2 },
      { "id": 2, "name": "Stapler", "department": "Academic Departments", "quantity": 25, "price": 5 },
      { "id": 3, "name": "Exam Sheets", "department": "Academic Departments", "quantity": 100, "price": 1 },
      { "id": 4, "name": "Projector", "department": "Academic Departments", "quantity": 5, "price": 150 },
      { "id": 5, "name": "Lecture Notes Binder", "department": "Academic Departments", "quantity": 20, "price": 8 },
    
      { "id": 6, "name": "Art Supplies Kit", "department": "Humanities Departments", "quantity": 15, "price": 20 },
      { "id": 7, "name": "Canvas Boards", "department": "Humanities Departments", "quantity": 25, "price": 12 },
      { "id": 8, "name": "Sculpting Tools", "department": "Humanities Departments", "quantity": 10, "price": 30 },
      { "id": 9, "name": "Research Journals", "department": "Humanities Departments", "quantity": 50, "price": 5 },
      { "id": 10, "name": "Paint Brushes Set", "department": "Humanities Departments", "quantity": 20, "price": 15 },
    
      { "id": 11, "name": "Ledger Books", "department": "Finance Department", "quantity": 10, "price": 12 },
      { "id": 12, "name": "Calculator", "department": "Finance Department", "quantity": 15, "price": 25 },
      { "id": 13, "name": "Cash Register", "department": "Finance Department", "quantity": 5, "price": 200 },
      { "id": 14, "name": "Invoice Pads", "department": "Finance Department", "quantity": 50, "price": 3 },
      { "id": 15, "name": "Accountancy Books", "department": "Finance Department", "quantity": 20, "price": 18 },
    
      { "id": 16, "name": "Employee ID Cards", "department": "Human Resources Department", "quantity": 50, "price": 5 },
      { "id": 17, "name": "Attendance Register", "department": "Human Resources Department", "quantity": 10, "price": 10 },
      { "id": 18, "name": "Recruitment Flyers", "department": "Human Resources Department", "quantity": 100, "price": 1 },
      { "id": 19, "name": "Office Chair", "department": "Human Resources Department", "quantity": 15, "price": 75 },
      { "id": 20, "name": "Training Manuals", "department": "Human Resources Department", "quantity": 25, "price": 12 },
    
      { "id": 21, "name": "Ethernet Cables", "department": "IT Department", "quantity": 30, "price": 10 },
      { "id": 22, "name": "Wireless Routers", "department": "IT Department", "quantity": 10, "price": 50 },
      { "id": 23, "name": "Hard Drives", "department": "IT Department", "quantity": 15, "price": 80 },
      { "id": 24, "name": "Keyboards", "department": "IT Department", "quantity": 25, "price": 20 },
      { "id": 25, "name": "USB Drives", "department": "IT Department", "quantity": 50, "price": 15 },
    
      { "id": 26, "name": "Library Cards", "department": "Library", "quantity": 100, "price": 2 },
      { "id": 27, "name": "Bookshelves", "department": "Library", "quantity": 5, "price": 300 },
      { "id": 28, "name": "Reading Lamps", "department": "Library", "quantity": 10, "price": 25 },
      { "id": 29, "name": "Book Scanner", "department": "Library", "quantity": 3, "price": 400 },
      { "id": 30, "name": "Library Catalog Software", "department": "Library", "quantity": 1, "price": 1000 },
    
      { "id": 31, "name": "Soccer Balls", "department": "Sports Department", "quantity": 20, "price": 25 },
      { "id": 32, "name": "Basketball Hoops", "department": "Sports Department", "quantity": 5, "price": 150 },
      { "id": 33, "name": "Tennis Rackets", "department": "Sports Department", "quantity": 15, "price": 40 },
      { "id": 34, "name": "Jerseys", "department": "Sports Department", "quantity": 50, "price": 20 },
      { "id": 35, "name": "Water Bottles", "department": "Sports Department", "quantity": 30, "price": 10 },
    
      { "id": 36, "name": "Coffee Mugs", "department": "Cafeteria", "quantity": 50, "price": 8 },
      { "id": 37, "name": "Serving Trays", "department": "Cafeteria", "quantity": 25, "price": 12 },
      { "id": 38, "name": "Cutlery Set", "department": "Cafeteria", "quantity": 15, "price": 30 },
      { "id": 39, "name": "Napkin Dispensers", "department": "Cafeteria", "quantity": 10, "price": 20 },
      { "id": 40, "name": "Coffee Machines", "department": "Cafeteria", "quantity": 5, "price": 250 }
    
    
  ];

  const filteredData = inventoryData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterDept ? item.department === filterDept : true)
  );

  return (
    <div style={styles.container} className="text-black">
      <h1 style={styles.header} className="text-2xl font-semibold">Inventory Table</h1>
      <div style={styles.filters}>
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />
        <select
          value={filterDept}
          onChange={(e) => setFilterDept(e.target.value)}
          style={styles.select}
        >
          <option value="">All Departments</option>
          <option value="Academic Departments">Academic Departments</option>
          <option value="Humanities Departments">Humanities Departments</option>
          <option value="Finance Department">Finance Department</option>
          <option value="Human Resources Department">Human Resources Department</option>
          <option value="IT Department">IT Department</option>
          <option value="Library">Library</option>
          <option value="Sports Department">Sports Department</option>
          <option value="Cafeteria">Cafeteria</option>
        </select>
      </div>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} style={styles.tableRow}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.department}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "white", // Pastel green background
    padding: "15px",
    borderRadius: "10px",
    maxWidth: "1300px",
    margin: "auto",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    marginTop:"20px"
    
  },
  header: {
    textAlign: "center",
    color: "#15B392",
    marginBottom: "20px",
    fontFamily: "'Roboto', sans-serif",
  
    
  },
  filters: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  input: {
    width: "60%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #c8e6c9",
  },
  select: {
    width: "35%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #c8e6c9",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    overflow: "hidden",
  },
  tableHeader: {
    backgroundColor: "#15B392",
    color: "#ffffff",
  },
  tableRow: {
    textAlign: "center",
    borderBottom: "1px solid #e0f2f1",
    height: "40px",
  },
};

export default InventoryTable;
