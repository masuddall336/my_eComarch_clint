
import { useEffect, useState } from 'react';
import Carousel from '../carousel/Carousel'
import FlashSales from '../flash_sales/FlashSales'
import Catagory from '../catagory/Catagory';

const Home = () => {
  const [datas, setDatas] = useState({
    carousel_content: [],
    flash_sales: [],
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
      <Catagory></Catagory>
    </div>
  )
}

export default Home
