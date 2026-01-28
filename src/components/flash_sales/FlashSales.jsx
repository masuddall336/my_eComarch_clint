import { NavLink } from "react-router";
import './flashSales.css'


const FlashSales = ({ datas }) => {
  console.log(datas.flash_sales);


  return (
    <div className="px-[1%] xl:px-[5%] py-5">
      <div className="flex justify-between items-center py-3 border-b border-[#a1a0a0] ">
        <h2 className="text-[#4b4a4a] font-bold text-xl">Flash Sale</h2>
        <NavLink className='button'>See All Products</NavLink>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 items-stretch items-center gap-2 h-full h-[300px] pt-2">
        {
          datas.flash_sales.map(item => (
            <NavLink className='h-full pb-10'>
              <div className=" justify-between card_flash_sale bg  border border-[#ee3f3686] rounded-[3px] ">
                <img className="rounded-t-[3px] h-[150px] object-cover" src={item.img} alt="" />
                <div className=" pl-1">
                  <h2 className="text-[#2e2c2c] font-bold pt-1 text-xs">{item.title}</h2>
                  <h2 className="text-[#fff] ">৳ {item.price}</h2>
                  <p>
                    <span className=" ">
                      <span className="text-[#ffffff7e] line-through">{item.previous_price}</span>
                    </span > <span className="text-[#fff]">-{item.discount}%</span>
                  </p>
                </div>
              </div>
            </NavLink>
          ))
        }
      </div>
    </div>
  );
};

export default FlashSales;