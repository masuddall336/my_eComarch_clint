import React from 'react';
import { NavLink } from 'react-router';

import sckin_care from "../../../public/catagoris/sckin-care.png"

const Catagory = () => {
  return (
    <div>
      <div className="px-[1%] xl:px-[5%]">
        <div className="flex justify-between items-center py-5">
          <h2 className="text-[#4b4a4a] font-bold text-xl">Flash Sale</h2>
          <NavLink className='button'>See All Products</NavLink>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 items-stretch items-center gap-2 h-full   h-[300px]  ">
          <NavLink className='h-full'>
            <div className="flex flex-col  justify-between card_flash_sale bg py-2 px-2 border border-[#ee3f3686] rounded-[3px] ">
              <img className="rounded-[3px] h-[150px] object-cover" src={sckin_care} alt="" />
              <h3>Sckin Care Products</h3>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Catagory;