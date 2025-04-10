import React from 'react';
import { LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';


function Navbar() {

    const navItems = (
        <>
            <li><Link className='text-lg' to='/LandingPage'>Home</Link></li>
            <li><Link className='text-lg' to='/Category'>Category</Link></li>
            <li><Link className='text-lg' to='/contact'>Contact</Link></li>
            <li><Link className='text-lg' to='/about'>About</Link></li>
            <li><Link className='text-lg' to='/Catalouge'>Catalouge</Link></li>
        </>
    );

    return (
        <div className='fixed top-0 left-0 right-0 z-10 '>
            <div className=" bg-white px-4 flex justify-between items-center">
                <div className="">
                    <a className=" text-sm sm:text-xl font-bold cursor-pointer">BookMart</a>
                </div>

                <div className="n hidden lg:flex ">
                    <ul className="menu menu-horizontal px-4 space-x-6">
                        {navItems}
                    </ul>
                </div>

                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn m-1">☰</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-36 p-2 shadow">
                        {navItems}
                    </ul>
                </div>


                <div className='flex justify-center items-center p-2 bg-blue-400  text-white text-sm rounded-md'>
                    <button><Link to={'/Login'} className='flex space-x-2'><LogOut className='w-4 h-4' /><span>Logout</span></Link></button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;