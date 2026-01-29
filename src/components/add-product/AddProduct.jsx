import React from 'react'
import Swal from 'sweetalert2';

const AddProduct = () => {
    const handeSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const datas = Object.fromEntries(formData.entries())
        console.log(datas);

        fetch('http://localhost:3000/products', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(datas)
        })
            .then(res => res.json())
            .then(data => {
                
                Swal.fire({
                    title: "Prodcut added Successfully",
                    icon: "success",
                    draggable: true
                });
            })
    }
    return (
        <div className=' py-20'>
            <div>
                <h2 className='text-center font-bold text-3xl pb-5 underline text-[#6e6b6b]'>Add New Product</h2>
                <form onSubmit={handeSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 mx-auto max-w-[1200px] justify-items-center-safe gap-3'>
                        <div className=''>
                            <label className='text-[#666666] font-bold'>Produt Short name:</label>
                            <br />
                            <input className='bg-[#978484] p-2 border-1 rounded outline-none' type="text" name='short_name' placeholder='For home page' />
                        </div>
                        <div>
                            <label className='text-[#666666] font-bold'>Produt Long name:</label>
                            <br />
                            <input className='bg-[#978484] p-2 border-1 rounded outline-none' type="text" name='long_name' placeholder='product details page' />
                        </div>
                        <div>
                            <label className='text-[#666666] font-bold'>Produt Description:</label>
                            <br />
                            <input className='bg-[#978484] p-2 border-1 rounded outline-none' type="text" name='description' placeholder='input description' />
                        </div>
                        <div>
                            <label className='text-[#666666] font-bold'>Produt Catagory</label>
                            <br />
                            <input className='bg-[#978484] p-2 border-1 rounded outline-none' type="text" name='catagory' placeholder='input product Catagory' />
                        </div>
                        <div>
                            <label className='text-[#666666] font-bold'>Produt Price:</label>
                            <br />
                            <input className='bg-[#978484] p-2 border-1 rounded outline-none' type="text" name='present_price' placeholder='input price' />
                        </div>
                        <div>
                            <label className='text-[#666666] font-bold'>Produt Before Price:</label>
                            <br />
                            <input className='bg-[#978484] p-2 border-1 rounded outline-none' type="text" name='previous_price' placeholder='input Before Price' />
                        </div>
                        <div>
                            <label className='text-[#666666] font-bold'>Discount Parcentage:</label>
                            <br />
                            <input className='bg-[#978484] p-2 border-1 rounded outline-none' type="text" name='parcentage' placeholder='input Parcentage' />
                        </div>
                        <div>
                            <label className='text-[#666666] font-bold'>Image URL:</label>
                            <br />
                            <input className='bg-[#978484] p-2 border-1 rounded outline-none' type="text" name='url' placeholder='input URL' />
                        </div>
                    </div>
                    <br />
                    <input className='bg-[#978484]  p-2 border-1 rounded outline-none mx-auto flex w-[60%] cursor-pointer ' type="submit" />
                </form>
            </div>
        </div>
    )
}

export default AddProduct
