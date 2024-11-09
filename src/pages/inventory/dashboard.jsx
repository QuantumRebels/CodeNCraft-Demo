import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import Stock from './stock'
import InventoryTable from './inventorytable';
function Home() {


     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards-3 ml-12'>
            <div className='card-3 '>
                <div className='card-inner'>
                    <h3 className='text-2xl p-4'>No. of Items in Stock </h3>
                 
                </div>
                <h1 className='text-2xl'>30</h1>
            </div>
            <div className='card-3'>
                <div className='card-inner'>
                    <h3 className='text-2xl p-4'>No. of Items Out of Stock</h3>
                 
                </div>
                <h1 className='text-2xl'>20</h1>
            </div>
         
      
        </div>

        <Stock/>
        <InventoryTable/>
    </main>
  )
}

export default Home