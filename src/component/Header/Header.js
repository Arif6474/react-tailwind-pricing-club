import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className ="text-4xl my-4 text-[#be185d]">Save most of your money</h1>
            <p className="text-3xl my-2 text-yellow-900">By giving your money to me</p>
        </div>
    );
};

export default Header;