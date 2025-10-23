import icon04 from '../assets/img/icon-04.png'
import icon05 from '../assets/img/icon-05.png'
import icon06 from '../assets/img/icon-06.png'
import icon07 from '../assets/img/icon-07.png'

function Stats() {
  return (
    <div className='bg-[#F5F7FA] py-10 px-5 md:px-0'>
      <div className='container mx-auto max-w-[1320px] p-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <h3 className='text-[1.7rem] font-semibold'>Lorem ipsum dolor sit <br /> <span className='text-[#4CAF4F]'>amet consectetur adipisicing</span></h3>
          <p className='mt-2'>We reached here with our hard work and dedication</p>
        </div>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left'>
            <div className='flex flex-col md:flex-row items-center md:items-start p-4'>
              <img className='w-12 h-12 bg-[#f0f9f4] p-2 rounded-md mb-4 md:mb-0 md:mr-4' src={icon04} alt="icon" />
              <div>
                <h4 className='text-xl font-semibold'>2,245,341</h4>
                <p className='text-sm text-gray-600'>Members</p>
              </div>  
            </div>

            <div className='flex flex-col md:flex-row items-center md:items-start p-4'>
              <img className='w-12 h-12 bg-[#f0f9f4] p-2 rounded-md mb-4 md:mb-0 md:mr-4' src={icon05} alt="icon" />
              <div>
                <h4 className='text-xl font-semibold'>828,867</h4>
                <p className='text-sm text-gray-600'>Event Bookings</p>
              </div>
            </div>

            <div className='flex flex-col md:flex-row items-center md:items-start p-4'>
              <img className='w-12 h-12 bg-[#f0f9f4] p-2 rounded-md mb-4 md:mb-0 md:mr-4'  src={icon06} alt="icon" />
              <div>
                <h4 className='text-xl font-semibold'>46,328</h4>
                <p className='text-sm text-gray-600'>Clubs</p>
              </div>
            </div>

            <div className='flex flex-col md:flex-row items-center md:items-start p-4'>
              <img className='w-12 h-12 bg-[#f0f9f4] p-2 rounded-md mb-4 md:mb-0 md:mr-4' src={icon07} alt="icon" />
              <div>
                <h4 className='text-xl font-semibold'>1,926,436</h4>
                <p className='text-sm text-gray-600'>Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats