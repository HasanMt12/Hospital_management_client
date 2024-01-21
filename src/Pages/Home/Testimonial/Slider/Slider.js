import React from 'react';
import packages from "../../../../assets/Workflow/health-insurance.png";
import { BiHappyHeartEyes } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import { FaRegAngry } from "react-icons/fa";
import './Slider.css'
import { Rating, StickerStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const myStyles = {
  itemShapes: StickerStar,
  activeFillColor: '#13A2B7',
  inactiveFillColor: "#b2cacd"
}
const Slider = ({rev}) => {
  return (
          <div className='px-4 shadow-sm rounded-sm bg-[#f1f5f6] '>
              <div className='lg:min-h-[170px] md:min-[150px] min-h-[110px]'>
                
                <div className='py-2 class-name text-[#333333] text-lg font-medium ' >{rev.details}</div>
                </div>
              <div className="mt-10 flex justify-between items-center lg:min-h-[90px] md:min-h-[65px] min-h-[55px]">
                <div className="flex justify-center items-start gap-4 py-4">
                  <div className='w-20 h-20'><img src={packages} className="object-cover rounded-full border-dashed border-2 border-blue-500 p-1 " alt=""></img></div>
                  <div className="flex-col justify-center items-center gap-3">
                      <h2 className='text-[#333333] font-semibold text-lg'> {rev.name}</h2>
                       <h2 className='text-[#333333] text-sm'>{rev.title}</h2>
                        <h2 className='text-[#13A2B7]'> {rev.time}</h2>
                  </div>

                </div>
                  
                <div>
                 <Rating     itemStyles={myStyles}
                              style={{ maxWidth: 120 }}
                              value={rev.rating}
                            />
                   {rev?.rating <= 2 && rev?.rating > 0 ? (
                  <p className="flex justify-center items-center gap-1 text-[#13A2B7]">
                    I hate This <FaRegAngry />
                  </p>
                ) : rev?.rating <= 4 ? (
                  <p className="flex justify-center items-center gap-1 text-[#13A2B7]">
                    It is Awesome. <BiHappyHeartEyes />
                  </p>
                ) : (
                  <p className="flex justify-center items-center gap-1 text-[#13A2B7]">
                    I just love it. <BsHeartFill />
                  </p>
                )}
                </div>

              </div>

            </div>
  );
};

export default Slider;