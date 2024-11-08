import Navbar from './usernavbar'
import React from "react";
import Request from './requestfile'
import Tracking from './userTracking'
import Footer from '../../components/Footer'
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Dashboard = () => {
  const data = [
    { name: "File1", uv: 40, pv: 24 },
    { name: "File2", uv: 30, pv: 13 },
    { name: "File3", uv: 20, pv: 98 },
  ];

  const pieData = [
    { name: "File1", value: 43.8 },
    { name: "File2", value: 31.3 },
    { name: "File3", value: 18.8 },
    { name: "Others", value: 6.3 },
  ];

  const COLORS = ["#0088FE", "#FFBB28", "#FF8042", "#A0A0A0"];

  return (
    <>
    <Navbar/>
    <div className="dashboard">
      <h1 className='text-4xl text-center align-middle items-start mt-6 mb-8'>Hi, Welcome back 👋</h1>
      <div className="stats-cards">
        <Card title="Total Requests" value="7"  color="blue" />
        <Card title="No of Accepted Requests" value="5" color="purple" />
        <Card title="No of Rejected Requests" value="2"color="yellow" />
        
      </div>
      <h3 className='text-3xl text-center align-middle items-center mt-12 mb-8'>Check Graphical Scores</h3>
      <div className="charts">
     
        <div className="chart">
          
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="chart">
          <h3>No of Hours Taken to Approve / Reject</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="uv" fill="#8884d8" />
              <Bar dataKey="pv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    <Tracking/>
    <Request/>
    <Footer/>
    </>
  );
};

const Card = ({ title, value, change, color }) => (
  <div className={`card ${color}`}>
    <h4>{title}</h4>
    <p className="value">{value}</p>
    <p className="change">{change}</p>
    <ResponsiveContainer width="100%" height={50}>
      <LineChart data={[{ uv: 1 }, { uv: 2 }, { uv: 3 }]}>
        <Line type="monotone" dataKey="uv" stroke="#000" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
  
);

export default Dashboard;
