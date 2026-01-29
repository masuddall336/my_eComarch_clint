import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import Swal from "sweetalert2";

const JustForYou = () => {

  const [data, setDatas] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/products') // public folder path
      .then((res) => res.json())
      .then((data) => setDatas(data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);
  console.log("tale id ", data);

  const handleDelet = e => {
    console.log(e.target);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      console.log(result.isConfirmed);

      if (result.isConfirmed) {

        // Start Deleting the product
        fetch(`http://localhost:3000/products/${e}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Product has been deleted.",
                icon: "success"
              });
            }
          }
          )


      }
    });

  }


  return (
    <div className="px-[1%] xl:px-[5%] py-5">
      <div className="flex justify-between items-center py-3 border-b border-[#a1a0a0] ">
        <h2 className="text-[#4b4a4a] font-bold text-xl">Just For You</h2>
        <NavLink className='button'>See All Products</NavLink>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 items-stretch items-center gap-2 h-full h-[300px] pt-2">
        {
          data.map(item => (

            <NavLink to={`/product-details/${item._id}`} className='h-full pb-10'>
              <div className=" justify-between card_flash_sale bg  border border-[#ee3f3686] rounded-[3px] ">
                <img className="rounded-t-[3px] h-[150px] object-cover" src={item.url} alt="" />
                <div className=" pl-1">
                  <h2 className="text-[#2e2c2c] font-bold pt-1 text-xs">{item.short_name}</h2>
                  <h2 className="text-[#fff] ">৳ {item.present_price}</h2>
                  <p>
                    <span className=" ">
                      <span className="text-[#ffffff7e] line-through">{item.previous_price}</span>
                    </span > <span className="text-[#fff]">-{item.parcentage}%</span>
                  </p>
                </div>
                <button className="bg-[#db4b1e] p-2 mr-1">Wiew</button>
                <NavLink to={`product-update/${item._id}`}><button className="bg-[#db4b1e] p-2 mb-1">Edit</button></NavLink>
                <button onClick={() => handleDelet(item._id)} className="bg-[#db4b1e] p-2">Delet</button>
              </div>
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default JustForYou
