import React, { useEffect, useState } from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import Create from  './create'
import CreateUser from './usercreate'
import Display from './filedisplay'
import axios from 'axios'
function Home() {
    


  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards-2'>
            <div className='card2 flex justify-center align-middle flex-col'>
                <div className='card-inner'>
                    <h3 className='text-xl p-2'>No of Claims Pending</h3>
                    
                </div>
                <h1  className='text-xl p-2'>300</h1>
            </div>
            <div className='card2 flex justify-center align-middle flex-col'>
                <div className='card-inner'>
                    <h3 className='text-xl p-2'>No of Claims Accepted</h3>
         
                </div>
                <h1 className='text-xl p-2'>12</h1>
            </div>
            <div className='card2 flex justify-center align-middle flex-col'>
                <div className='card-inner'>
                    <h3 className='text-xl p-2'>Create New User</h3>
                
                </div>
                <CreateUser/>
            </div>
            <div className='card2 flex justify-center align-middle flex-col'>
                <div className='card-inner'>
                   <h3 className='text-xl p-3'>Create New Files</h3>
                   
                </div>
                <Create/>
            </div>
        </div>

        
        <Display/>
    </main>
  )
}

export default Home