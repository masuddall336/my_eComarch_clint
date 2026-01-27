import { NavLink } from "react-router";
import './flashSales.css'


const FlashSales = ({ datas }) => {
  console.log(datas.flash_sales);


  return (
    <div className="px-[5%]">
      <div className="flex justify-between items-center ">
        <h2 className="text-[#4b4a4a] font-bold text-xl">Flash Sale</h2>
        <NavLink className='button'>See All Products</NavLink>
      </div>
      <div className="flex justify-between items-center gap-2 h-full   h-[300px]  ">
        {
          datas.flash_sales.map(item => (
            <NavLink>
            <div className=" card_flash_sale bg py-2 px-2 border border-[#ee3f3686] rounded-[3px] ">
              <img className="rounded-[3px] flex-1" src={item.img} alt="" />
              <div className="">
                <h2 className="text-[#2e2c2c] font-bold pt-1 text-xs ">{item.title}</h2>
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