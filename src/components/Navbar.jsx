import React, { useState } from 'react';  //นำเข้าไลบรารี React และดึง useState hook จาก React เพื่อใช้สำหรับเก็บสถานะ (state) ภายในคอมโพเนนต์แบบฟังก์ชัน
import Logo from '.././assets/img/logo-black.png';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [toggle, setToggle] = useState(false);  

  const updateToggle = () => {
    setToggle(!toggle);
  }
  return (
    <nav className="bg-[#fdfdfd]">
      <div className='container mx-auto max-w-[1320px] relative h-auto p-10 flex flex-col md:flex-row  md:items-center md:justify-between md:h-[100px]' >
        <div>
           <a href="#">
            <img src={Logo} alt="Logo" className="p-1 h-28 w-auto " />
          </a>
        </div>
      <ul className={`${toggle ? 'hidden' : 'flex'} flex flex-col my-5 md:flex md:flex-row  `}> 
        <li className="my-2 md:mx-3"><a href="#">Home</a></li>
        <li className="my-2 md:mx-3"><a href="#">About</a></li>
        <li className="my-2 md:mx-3"><a href="#">Services</a></li>
        <li className="my-2 md:mx-3"><a href="#">Contact</a></li>
        <li className="my-2 md:mx-3"><a href="#">Privacy Policy</a></li>
        <li className="my-2 md:mx-3"><a href="#">FAQ</a></li>
      </ul>
        <ul className={`${toggle ? 'hidden' : 'flex'} flex flex-col my-5 md:flex md:flex-row `}>
          <li>
            <a href="#" className="text-[rgba(0,90,41,0.76)] inline-flex justify-center px-5 py-2 rounded-full border-1">Login</a>
            <a href="#" className="bg-[#016e41] text-white inline-flex justify-center px-4 py-2 rounded-full ml-4">Sign Up</a>
          </li>
        </ul>
        
        {/* Hamburger Icon */}
       <FaBars onClick={updateToggle} className="text-[rgba(0,90,41,0.76)] absolute top-18 right-10 text-2xl cursor-pointer md:hidden" />
      </div>
    </nav>
  );
}

export default Navbar;


