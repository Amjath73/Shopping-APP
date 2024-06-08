import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const View = () => {
    const [data, changedData] = useState([])
    const fetchData = () => {
        axios.get(" https://fakestoreapi.com/products").then(
            (response) => {
                console.log(response.data)
                changedData(response.data)
            }
        ).catch().finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <div class="card">
                                            <img height="300px" src={value.image} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.title}</h5>
                                                <p class="card-title">{value.id}</p>
                                                <p class="card-title">{value.price}</p>
                                                <p class="card-text">{value.description}</p>
                                                <p class="card-text">{value.rating.rate}</p>
                                                <p class="card-text">{value.rating.count}</p>
                                                <p class="card-title">{value.category}</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
