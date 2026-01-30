
import { useEffect, useState } from 'react';
import Carousel from '../carousel/Carousel'
import FlashSales from '../flash_sales/FlashSales'
import Catagory from '../catagory/Catagory';
import JustForYou from '../justForYou/JustForYou';
import { NavLink } from 'react-router';

const Home = () => {
  const [datas, setDatas] = useState({
    carousel_content: [],
    flash_sales: [],
    catagorys: [],
    all_products: []
  });

  useEffect(() => {
    fetch('/api.json') // public folder path
      .then((res) => res.json())
      .then((data) => setDatas(data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);


  const [serverData, setServerData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/products') // public folder path
      .then((res) => res.json())
      .then((data) => setServerData(data))
      .catch((err) => console.error('Error fetching data:', err));
  }, [])
  console.log(serverData);



  return (
    <div>

      <Carousel></Carousel>
      <FlashSales datas={datas}></FlashSales>
      <Catagory catagory={datas}></Catagory>


      <div className=" pt-10 ">
        <div className='flex justify-between items-center px-[5%] pb-3 mx-auto '>
          <h2 className="text-[#4b4a4a] font-bold text-xl">Just For You</h2>
          <NavLink className='button'>See All Products</NavLink>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-2 pt-2 px-[1%] md:px-[5%]'>
          {
            serverData.map(products => <JustForYou serverData={serverData} setServerData={setServerData} products={products}></JustForYou>)
          }
        </div>
      </div>

    </div>
  )
}

export default Home
