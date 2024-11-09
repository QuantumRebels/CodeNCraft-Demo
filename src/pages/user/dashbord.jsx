import React, { useEffect, useState } from 'react'

import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import Request from  './request'
import axios from 'axios';
function Home() {

  const [Files, setFiles] = useState([])

    const data = [
        {
          name: 'Claim 1',
          uv: 4,
          pv: 2.4,
          amt: 2.4,
        },
        {
          name: 'Claim 2',
          uv: 3,
          pv: 2,
          amt: 1.75,
        },
        {
          name: 'Claim 3',
          uv: 2,
          pv: 5,
          amt: 3,
        },
        {
          name: 'Claim 4',
          uv: 2.7,
          pv: 3.9,
          amt: 2,
        },
        {
          name: 'Claim 5',
          uv: 1.8,
          pv: 4.8,
          amt: 2.1,
        },
        {
          name: 'Claim 6',
          uv: 2.3,
          pv: 3.8,
          amt: 2.5,
        },
        {
          name: 'Claim 7',
          uv: 3.4,
          pv: 4.3,
          amt: 2.1,
        },
      ];

      
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>No. of Files Claimed</h3>
                 
                </div>
                <h1>30</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>No. of files Accepted</h3>
                 
                </div>
                <h1>20</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>No. of Files Rejected</h3>
                    
                </div>
                <h1>10</h1>
            </div>
      
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
        <Request/>
    </main>
  )
}

export default Home