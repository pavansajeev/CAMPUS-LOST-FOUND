import React from 'react'

const FoundForm = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h1 className='text-center text-3xl'>Enter details of Found Item</h1>
      <form className="flex flex-col gap-4 mt-4">
       <label htmlFor="item-name">Item Name</label>
       <input id="item-name" type="text" placeholder='Item Name'  className="border border-gray-400 p-2 rounded" />
       <label htmlFor="location-found">Location Found</label>
       <input id="location-found" type="text" placeholder='Location Found'  className="border border-gray-400 p-2 rounded" />
       <label htmlFor="description">Description</label>
       <textarea id="description"  placeholder='Description'  className="border border-gray-400 p-2 rounded"/>
       <label htmlFor="contact-info">Contact Information</label>
       <input id="contact-info" type="text" placeholder='Contact Information'  className="border border-gray-400 p-2 rounded"/>
       <button type='submit' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
         Submit
       </button>
      </form>
    </div>
  )
}

export default FoundForm