
import icon01 from '../assets/img/icon-01.png';
import icon02 from '../assets/img/icon-02.png';
import icon03 from '../assets/img/icon-03.png';


function Community() {
  return (
    <div className='container mx-auto max-w-[1320px] text-neutral-800 pt-20 md:pt-24 p-10'>
        <h2 className='text-center text-[2.25rem] font-semibold text-[#555555] mb-2'>Join Our Community</h2>
        <p className='text-center text-[#555555] m-2 mt-2 text-lg md:text-2xl mb-10'>Connect with fellow matcha enthusiasts and share your passion!</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-start'>
            <div className='flex items-start space-x-4 md:flex-col md:items-center md:space-x-0 md:space-y-4'>
                <img src={icon01} alt="Community Icon 1" className='w-12 h-12 bg-[#f0f9f4] p-2 rounded-md' />
                <div className='text-left md:text-center'>
                    <h3 className='font-semibold'>Membership</h3>
                    <p className='text-sm'>Join our exclusive membership</p>
                    <p className='text-sm'>Sign up today and enjoy a range of benefits!</p>
                </div>
            </div>
            <div className='flex items-start space-x-4 md:flex-col md:items-center md:space-x-0 md:space-y-4'>
                <img src={icon02} alt="Community Icon 2" className='w-12 h-12 bg-[#f0f9f4] p-2 rounded-md' />
                <div className='text-left md:text-center'>
                    <h3 className='font-semibold'>Membership</h3>
                    <p className='text-sm'>Join our exclusive membership</p>
                    <p className='text-sm'>Sign up today and enjoy a range of benefits!</p>
                </div>
            </div>
            <div className='flex items-start space-x-4 md:flex-col md:items-center md:space-x-0 md:space-y-4'>
                <img src={icon03} alt="Community Icon 3" className='w-12 h-12 bg-[#f0f9f4] p-2 rounded-md' />
                <div className='text-left md:text-center'>
                    <h3 className='font-semibold'>Membership</h3>
                    <p className='text-sm'>Join our exclusive membership</p>
                    <p className='text-sm'>Sign up today and enjoy a range of benefits!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Community