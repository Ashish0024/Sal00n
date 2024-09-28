import React from 'react'
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='dashboard'>
    <div className='Dashboard'>
    <Link to={'/Saloon'}> <div className='Saloon'>Saloon</div></Link>
    <Link to={'/Customer'}><div className='Customer'>Customer</div></Link>
    <Link to={'/Saloon'}><div className='Saloon'>Explore</div></Link>
    {/* <Link to={'/Showdata'}><div className='Showdata'>List Of Machine</div></Link> */}

        
    </div>

    </div>
  )
}

export default Dashboard
