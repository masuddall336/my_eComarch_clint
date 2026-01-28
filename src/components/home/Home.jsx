
import { useEffect, useState } from 'react';
import Carousel from '../carousel/Carousel'
import FlashSales from '../flash_sales/FlashSales'
import Catagory from '../catagory/Catagory';
import JustForYou from '../justForYou/JustForYou';

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
  return (
    <div>
      <Carousel></Carousel>
      <FlashSales datas={datas}></FlashSales>
      <Catagory catagory={datas}></Catagory>
      <JustForYou products={datas}></JustForYou>
    </div>
  )
}

export default Home
