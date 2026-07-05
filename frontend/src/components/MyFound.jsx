import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const MyFound = () => {

    const [items, setItems] = useState([])

    const user = JSON.parse(localStorage.getItem("user"))

    const navigate = useNavigate()

    useEffect(() => {

        fetchItems()

    }, [])

    const fetchItems = async () => {

        try {

            const response = await axios.get("http://localhost:3000/found")

            console.log(response.data.data)

            const myItems = response.data.data.filter(
                item => item.userid === user._id
            )

            setItems(myItems)

        } catch (error) {

            console.log(error)

        }

    }

    return (

        <div className='mt-10'>

            <h1 className='text-3xl text-center mb-6'>
                My Found Items
            </h1>

            <div className='grid md:grid-cols-2 gap-5'>

                {
                    items.length === 0 ? (

                        <p className='text-center col-span-2'>
                            No Found Items
                        </p>

                    ) : (

                        items.map(item => (

                            <div
                                key={item._id}
                                className='bg-white shadow-lg p-5 rounded-xl'
                            >

                                <h2 className='text-xl font-bold'>
                                    {item.name}
                                </h2>

                                <p className='mt-2'>
                                    {item.description}
                                </p>

                                <p className='mt-2'>
                                    <b>Location :</b> {item.location}
                                </p>

                                <p>
                                    <b>Date :</b> {item.date}
                                </p>

                                <button
                                    onClick={() => navigate(`/claims/${item._id}`)}
                                    className='mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded'
                                >
                                    View Claims
                                </button>

                            </div>

                        ))

                    )
                }

            </div>

        </div>

    )

}

export default MyFound