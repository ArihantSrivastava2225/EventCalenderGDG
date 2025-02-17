import React, { useState } from 'react'
import { Link, NavLink } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [form, setForm] = useState([]);

    const navigate = useNavigate();

    const handleSelectChange = (event)=>{
        //Navigate to the selected option's value(month)
        navigate(`/${event.target.value}`)
        //here it is important to use / also with route name as if we don't write /, our page will route from current to another page like /Jan/Feb which will raise error
    }
  return (
    <div>
      <nav className='flex justify-between items-center p-4'>
        <div className="title">
          <span className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500'>&lt; Event</span> 
          <span className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-indigo-500 to-violet-500'>Calender/&gt;</span>
        </div>
        <div className="dropups flex justify-center gap-2">
            <input className='w-80 rounded-md' type="text" name="search" placeholder='Search for your events here!' />
            <select name="month" id="" className="rounded-md text-xl" onChange={handleSelectChange}>
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="Aug">Aug</option>
                <option value="Sep">Sep</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
            </select>
            {/* <input type="date" name="Date" id="" /> */}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
