
import { NavLink } from 'react-router';


const Catagory = ({ catagory }) => {
  console.log(catagory.catagorys);
  console.log(catagory.catagorys);

  return (
    <div className="px-[1%] xl:px-[5%] py-10 bg-[#dadada85]">
      <div className="flex justify-between items-center pb-2 border-b-1 border-[#d3d2d2]">
        <h2 className="text-[#4b4a4a] font-bold text-xl">Catagory</h2>
        <NavLink className='button'>See All Products</NavLink>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 items-stretch items-center  gap-2 h-full pt-2">
        {
          catagory.catagorys.map(catagory => (
            <NavLink className='h-full '>
              <div className="card_flash_sale bg-[#e4dede] border border-[#ee3f3686] rounded-[3px] ">
                <img className="rounded-t-[3px] object-cover" src={catagory.img} alt="" />
                {/* Content area */}
                <div className=" px-2 py-1 flex items-center h-[40px]">
                  <h2 className="text-[#2e2c2c] font-bold text-[13px] line-clamp-2 ">
                    {catagory.catagory_name}
                  </h2>
                </div>
              </div>
            </NavLink>
          ))
        }
      </div>
    </div>
  );
};

export default Catagory;