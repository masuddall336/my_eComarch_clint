import React from 'react'
import { useLoaderData } from 'react-router'
import Swal from 'sweetalert2';

const Update = () => {
  const { _id, short_name, long_name, description, catagory, present_price, previous_price, parcentage, url } = useLoaderData();
  const updateFromDatas = e => {
    e.preventDefault();
    const form = e.target;
    const formDatas = new FormData(form);
    const updateData = Object.fromEntries(formDatas.entries())
    console.log(updateData);

    // send update data
    fetch(`http://localhost:3000/products/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updateData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been Updated.",
                icon: "success"
              });
            }
          });
        }
      })

  }

  return (
    <div className=' py-20'>
      <div>
        <h2 className='text-center font-bold text-3xl pb-5 underline text-[#6e6b6b]'>Update New Product</h2>
        <form onSubmit={updateFromDatas}>
          <div className='grid grid-cols-1 md:grid-cols-2 mx-auto max-w-[1200px] justify-items-center-safe gap-3'>
            <div className=''>
              <label className='text-[#666666] font-bold'>Produt Short name:</label>
              <br />
              <input className='bg-[#978484] p-2 border-1 rounded outline-none' type="text" name='short_name' defaultValue={short_name} placeholder='For home page' />
            </div>
            <div>
              <label className='text-[#666666] font-bold'>Produt Long name:</label>
              <br />
              <input className='bg-[#978484] p-2 border-1 rounded outline-none' type="text" name='long_name' defaultValue={long_name} placeholder='product details page' />
            </div>
            <div>
              <label className='text-[#666666] font-bold'>Produt Description:</label>
              <br />
              <input className='bg-[#978484] p-2 border-1 rounded outline-none' type="text" name='description' defaultValue={description} placeholder='input description' />
            </div>
            <div>
              <label className='text-[#666666] font-bold'>Produt Catagory</label>
              <br />
              <input className='bg-[#978484] p-2 border-1 rounded outline-none' type="text" name='catagory' defaultValue={catagory} placeholder='input product Catagory' />
            </div>
            <div>
              <label className='text-[#666666] font-bold'>Produt Price:</label>
              <br />
              <input className='bg-[#978484] p-2 border-1 rounded outline-none' type="text" name='present_price' defaultValue={present_price} placeholder='input price' />
            </div>
            <div>
              <label className='text-[#666666] font-bold'>Produt Before Price:</label>
              <br />
              <input className='bg-[#978484] p-2 border-1 rounded outline-none' type="text" name='previous_price' defaultValue={previous_price} placeholder='input Before Price' />
            </div>
            <div>
              <label className='text-[#666666] font-bold'>Discount Parcentage:</label>
              <br />
              <input className='bg-[#978484] p-2 border-1 rounded outline-none' type="text" name='parcentage' defaultValue={parcentage} placeholder='input Parcentage' />
            </div>
            <div>
              <label className='text-[#666666] font-bold'>Image URL:</label>
              <br />
              <input className='bg-[#978484] p-2 border-1 rounded outline-none' type="text" name='url' defaultValue={url} placeholder='input URL' />
            </div>
          </div>
          <br />
          <input className='bg-[#978484]  p-2 border-1 rounded outline-none mx-auto flex w-[60%] cursor-pointer ' type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Update
