import React, { useState } from 'react'
import company_log from '../../../public/amaali.png';
import { NavLink } from 'react-router';
import './navbar.css'

const Navbar = () => {
    let [activeNav, setActiveNav] = useState('home');

    const handleActivenav = (manu) => {
        setActiveNav(manu);
    }

    return (
        <div className='flex items-center justify-between  bg-[#cfb4a5] py-1 px-5'>
            <div>
                <img className='w-[50%]' src={company_log} alt="" />
            </div>
            <nav>
                <nav className="    ">
                    <ul className='flex ul  bg-[#3a3a3a91] rounded '>
                        <NavLink onClick={() => handleActivenav('home')} className={activeNav === 'home' ? "bg-[#EC4024]  py-2 px-2 transition-all duration-400 ease-in-out  rounded-l-sm border-r border-r-[#383737] " : 'py-2 px-2 transition-all duration-400 ease-in-out  rounded-l-sm border-r border-r-[#383737]  bg-none hover:bg-[#EC4024]'}><li >Home</li></NavLink>

                        {/* first list item */}
                        <NavLink onClick={() => handleActivenav('beauty_personal_care')} className={activeNav === 'beauty_personal_care' ? 'bg-[#EC4024] py-2 px-2 transition-all duration-400 ease-in-out border-l border-r border-r-[#383737] border-l-[#fce0e0]' : ' py-2 px-2 transition-all duration-400 ease-in-out border-l border-r border-r-[#383737] border-l-[#fce0e0] bg-none hover:bg-[#EC4024]'}>
                            <li id='beauty_personalCare'>Beauty &amp; Personal Care

                                {/* first list item submenu */}
                                <ul className="submenu hidden">
                                    <li><a href="/skincare-products/">Skincare Products</a></li>
                                    <li><a href="/hair-care-products/">Hair Care Products</a></li>
                                    <li><a href="/body-care/">Body Care</a></li>
                                    <li><a href="/oral-care/">Oral Care</a></li>
                                    <li><a href="/mens-grooming/">Men’s Grooming</a></li>
                                    <li><a href="/beauty-tools/">Beauty Tools &amp; Devices</a></li>
                                    <li><a href="/makeup-cosmetics/">Makeup &amp; Cosmetics</a></li>
                                </ul>
                            </li>
                        </NavLink>

                        {/* second list item */}
                        <NavLink onClick={() => handleActivenav('home_essentials')} className={activeNav === 'home_essentials' ? 'bg-[#EC4024] py-2 px-2 transition-all duration-400 ease-in-out border-l border-r border-r-[#383737] border-l-[#fce0e0]' : ' py-2 px-2 transition-all duration-400 ease-in-out border-l border-r border-r-[#383737] border-l-[#fce0e0] bg-none hover:bg-[#EC4024]'}>
                            <li id='beauty_personalCare'>Home Essentials

                                {/* Second list item submenu */}
                                <ul className="submenu hidden">
                                    <li><a href="/skincare-products/">Skincare Products</a></li>
                                    <li><a href="/hair-care-products/">Hair Care Products</a></li>
                                    <li><a href="/body-care/">Body Care</a></li>
                                    <li><a href="/oral-care/">Oral Care</a></li>
                                    <li><a href="/mens-grooming/">Men’s Grooming</a></li>
                                    <li><a href="/beauty-tools/">Beauty Tools &amp; Devices</a></li>
                                    <li><a href="/makeup-cosmetics/">Makeup &amp; Cosmetics</a></li>
                                </ul>
                            </li>
                        </NavLink>

                        {/* Third list item */}
                        <NavLink onClick={() => handleActivenav('electronics')} className={activeNav === 'electronics' ? 'bg-[#EC4024] py-2 px-2 transition-all duration-400 ease-in-out border-l border-r border-r-[#383737] border-l-[#fce0e0]' : ' py-2 px-2 transition-all duration-400 ease-in-out border-l border-r border-r-[#383737] border-l-[#fce0e0] bg-none hover:bg-[#EC4024]'}>
                            <li id='beauty_personalCare'>Electronics

                                {/* Third list item submenu */}
                                <ul className="submenu hidden">
                                    <li><a href="/skincare-products/">Skincare Products</a></li>
                                    <li><a href="/hair-care-products/">Hair Care Products</a></li>
                                    <li><a href="/body-care/">Body Care</a></li>
                                    <li><a href="/oral-care/">Oral Care</a></li>
                                    <li><a href="/mens-grooming/">Men’s Grooming</a></li>
                                    <li><a href="/beauty-tools/">Beauty Tools &amp; Devices</a></li>
                                    <li><a href="/makeup-cosmetics/">Makeup &amp; Cosmetics</a></li>
                                </ul>
                            </li>
                        </NavLink>

                        {/* Fourth list item */}
                        <NavLink onClick={() => handleActivenav('amazone_finds')} className={activeNav === 'amazone_finds' ? 'bg-[#EC4024] py-2 px-2 transition-all duration-400 ease-in-out border-l  border-l-[#fce0e0] rounded-r' : ' py-2 px-2 transition-all duration-400 ease-in-out border-l  border-l-[#fce0e0] bg-none hover:bg-[#EC4024] rounded-r'}>
                            <li id='beauty_personalCare'>Amazon Finds

                                {/* Fourth list item submenu */}
                                <ul className="submenu hidden">
                                    <li><a href="/skincare-products/">Skincare Products</a></li>
                                    <li><a href="/hair-care-products/">Hair Care Products</a></li>
                                    <li><a href="/body-care/">Body Care</a></li>
                                    <li><a href="/oral-care/">Oral Care</a></li>
                                    <li><a href="/mens-grooming/">Men’s Grooming</a></li>
                                    <li><a href="/beauty-tools/">Beauty Tools &amp; Devices</a></li>
                                    <li><a href="/makeup-cosmetics/">Makeup &amp; Cosmetics</a></li>
                                </ul>
                            </li>
                        </NavLink>
                    </ul>
                </nav>
            </nav>
            {/* Login */}
            <div>
                <a className='bg-[#EC4024] px-2 py-2 rounded' href="">Login</a>
            </div>
        </div>
    )
}

export default Navbar;



//  <li><a href="/best-sellers/">Popular Picks</a></li>
//                     <li><a href="/top-rated/">	Highly Reviewed</a></li>
//                     <li><a href="/best-deals/">Recommended Products</a></li>
//                     <li><a href="/under-25/">Budget-Friendly Picks</a></li>
//                     <li><a href="/trending-beauty/">	Latest Beauty Picks</a></li>

//                     <li>
//                         <a href="/guides/">Guides</a>
//                         <ul class="submenu">
//                             <li><a href="/product-reviews/">Product Reviews</a></li>
//                             <li><a href="/buying-guides/">Buying Guides</a></li>
//                             <li><a href="/best-of-beauty/">Best of Beauty</a></li>
//                             <li><a href="/comparisons/">Comparison Charts</a></li>
//                             <li><a href="/beauty-tips/">Beauty Tips</a></li>
//                         </ul>
//                     </li>
