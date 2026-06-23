import React, { useState } from 'react'
import axios from 'axios'

const FoundForm = () => {

    const [formData, setFormData] = useState({

        itemName: '',
        locationFound: '',
        description: '',
        contactInfo: '',
        question: '',
        answer: ''

    })


    const handleChange = (e) => {

        const { id, value } = e.target

        setFormData(prevState => ({

            ...prevState,

            [id]: value

        }))
    }



    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            const response = await axios.post(

                'http://localhost:3000/found',

                {

                    name: formData.itemName,

                    description: formData.description,

                    location: formData.locationFound,

                    contactInfo: formData.contactInfo,

                    question: formData.question,

                    answer: formData.answer

                }

            )

            console.log(response.data)

            alert("Item Added Successfully")

            setFormData({

                itemName: '',
                locationFound: '',
                description: '',
                contactInfo: '',
                question: '',
                answer: ''

            })

        }

        catch (error) {

            console.log(error)

            alert("Failed to add item")

        }

    }



    return (

        <div className="max-w-md mx-auto p-4 bg-white rounded shadow">

            <h1 className='text-center text-3xl'>

                Enter details of Found Item

            </h1>


            <form

                className="flex flex-col gap-4 mt-4"

                onSubmit={handleSubmit}

            >

                <label htmlFor="itemName">

                    Item Name

                </label>

                <input

                    id="itemName"

                    type="text"

                    placeholder='Item Name'

                    className="border border-gray-400 p-2 rounded"

                    value={formData.itemName}

                    onChange={handleChange}

                />



                <label htmlFor="locationFound">

                    Location Found

                </label>

                <input

                    id="locationFound"

                    type="text"

                    placeholder='Location Found'

                    className="border border-gray-400 p-2 rounded"

                    value={formData.locationFound}

                    onChange={handleChange}

                />



                <label htmlFor="description">

                    Description

                </label>

                <textarea

                    id="description"

                    placeholder='Description'

                    className="border border-gray-400 p-2 rounded"

                    value={formData.description}

                    onChange={handleChange}

                />



                <label htmlFor="contactInfo">

                    Contact Information

                </label>

                <input

                    id="contactInfo"

                    type="text"

                    placeholder='Contact Information'

                    className="border border-gray-400 p-2 rounded"

                    value={formData.contactInfo}

                    onChange={handleChange}

                />



                <label htmlFor="question">

                    Verification Question

                </label>

                <input

                    id="question"

                    type="text"

                    placeholder='Example: What colour is it?'

                    className="border border-gray-400 p-2 rounded"

                    value={formData.question}

                    onChange={handleChange}

                />



                <label htmlFor="answer">

                    Correct Answer

                </label>

                <input

                    id="answer"

                    type="text"

                    placeholder='Correct Answer'

                    className="border border-gray-400 p-2 rounded"

                    value={formData.answer}

                    onChange={handleChange}

                />



                <button

                    type='submit'

                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"

                >

                    Submit

                </button>

            </form>

        </div>

    )

}

export default FoundForm