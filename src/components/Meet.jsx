import Tim from '../assets/img/tim-smith.png';
import clientImgLogo01 from '../assets/img/clients/client-01.png';
import clientImgLogo02 from '../assets/img/clients/client-02.png';
import clientImgLogo03 from '../assets/img/clients/client-03.png';
import clientImgLogo04 from '../assets/img/clients/client-04.png';
import clientImgLogo05 from '../assets/img/clients/client-05.png';
import clientImgLogo06 from '../assets/img/clients/client-06.png';
import { HiOutlineArrowCircleRight } from "react-icons/hi";


function Meet() {
  return (
    <div className='bg-[#F5F7FA] py-10'>
        <div className='container mx-auto max-w-[1320] p-10 grid grid-cols-1 md:grid-cols-2' >
            <div>
                <img src={Tim} alt="" />
            </div>
            <div>
                <p className='text-[#4CAF4F] font-semibold mb-4 my-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h3 className='mt-5 md:mt-0 text-[1.25rem] font-semibold text-[#333]'>Tim Smith</h3>
                <p className='text-[#666]'>CEO, Company Name</p>
                <ul className='flex flex-col items-center md:flex-row md:justify-between mt-10'>
                    <li><img src={clientImgLogo01} alt="" /></li>
                    <li><img src={clientImgLogo02} alt="" /></li>
                    <li><img src={clientImgLogo03} alt="" /></li>
                    <li><img src={clientImgLogo04} alt="" /></li>
                    <li><img src={clientImgLogo05} alt="" /></li>
                    <li><img src={clientImgLogo06} alt="" /></li>
                    <li><a href="#" className='text-[#4CAF4F] flex items-center  font-semibold'>Meet all customers <HiOutlineArrowCircleRight clas/></a></li>
                </ul>
            </div>

        </div>

    </div>
  )
}

export default Meet