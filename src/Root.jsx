import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Outlet, useLoaderData } from 'react-router'
import Footer from './components/footer/Footer'



const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </div>
    )
}

export default Root
