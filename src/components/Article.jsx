
import articleImg01 from '../assets/img/article-01.png';
import articleImg02 from '../assets/img/article-02.png';
import articleImg03 from '../assets/img/article-03.png';
import { HiOutlineArrowCircleRight } from "react-icons/hi";

function Article() {
  return (
    <div className='pt-10 pb-20 text-center'>
        <div className='container mx-auto max-w-[1320]'>
            <h3 className='text-[1.5rem] font-semibold text-[#333]'>Latest Articles</h3>
            <p className='text-[#717171]'>
            Stay updated with our latest news and articles on matcha and wellness. <br /> Explore tips, recipes, and more!
            </p>

            <div className='my-10 '>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>
                    {/* Card1 */}
                    <div className='m-6 md:m-0 flex flex-col items-center'>
                         <div className='bg-[#ffffff] w-full max-w-[420px] p-6 rounded-xl shadow-lg mt-6 text-left'>
                             <img className ='rounded-xl w-full max-w-[420px] object-cover'src={articleImg01} alt="" />
                             <h4 className='text-[1.15rem] font-semibold text-[#333] mt-4'>The Health Benefits of Matcha: Why You Should Drink It Daily</h4>
                             <p className='text-[#717171] my-3'>Discover the numerous health benefits of matcha, from boosting metabolism to enhancing mental clarity.</p>
                             <a href="#">Read more <HiOutlineArrowCircleRight className='inline-block ml-1  text-[#016e41]' /></a>
                            
                        </div> 
                    </div> 

                    {/* Card2 */}
                    <div className='m-6 md:m-0 flex flex-col items-center'>
                         <div className='bg-[#ffffff] w-full max-w-[420px] p-6 rounded-xl shadow-lg mt-6 text-left'>
                             <img className ='rounded-xl w-full max-w-[420px] object-cover'src={articleImg02} alt="" />
                             <h4 className='text-[1.15rem] font-semibold text-[#333] mt-4'>The Health Benefits of Matcha: Why You Should Drink It Daily</h4>
                             <p className='text-[#717171] my-3'>Discover the numerous health benefits of matcha, from boosting metabolism to enhancing mental clarity.</p>
                             <a href="#">Read more <HiOutlineArrowCircleRight className='inline-block ml-1  text-[#016e41]' /></a>
                            
                        </div> 
                    </div> 
                    {/* Card3 */}
                    <div className='m-6 md:m-0 flex flex-col items-center'>
                         <div className='bg-[#ffffff] w-full max-w-[420px] p-6 rounded-xl shadow-lg mt-6 text-left'>
                             <img className ='rounded-xl w-full max-w-[420px] object-cover'src={articleImg03} alt="" />
                             <h4 className='text-[1.15rem] font-semibold text-[#333] mt-4'>The Health Benefits of Matcha: Why You Should Drink It Daily</h4>
                             <p className='text-[#717171] my-3'>Discover the numerous health benefits of matcha, from boosting metabolism to enhancing mental clarity.</p>
                             <a href="#">Read more <HiOutlineArrowCircleRight className='inline-block ml-1  text-[#016e41]' /></a>
                            
                        </div> 
                    </div>
                     
                </div>
            </div>
        </div>
    </div>
  )
}

export default Article