import img02 from '../assets/img/img-02.png';

function How() {
  return (
<div className='py-10'>
        <div className='container mx-auto max-w-[1320px] p-10 grid grid-cols-1 md:grid-cols-2'>
            <div>
                <img src={img02} alt="" />
            </div>
            <div>
                <h3 className='mt-5 md:mt-0 text-[1.5rem] font-semibold text-[#4D4D4D]'>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Excepturi maxime adipisci saepe nulla quo, expedita suscipit architecto! Repudiandae enim quisquam aliquid ullam adipisci quae iste vero ipsam culpa! Consectetur, itaque!</h3>
                <p className='text-[#717171] my-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nemo deleniti
                </p>
                <a href="#" className="bg-[#016e41] text-white inline-flex justify-center px-4 py-2 rounded-full mt-6">Learn more</a>
            </div>
        </div>
    </div>
  )
}

export default How