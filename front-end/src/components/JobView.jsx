import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const JobView = () => {

    const [data, setData] = useState([])
    const [category, setcategory] = useState("")

    const fetchData = () => {

        axios.get("http://localhost:3030/viewjobs").then((res) => {

            setData(res.data)

        }).catch((err) => { console.log(err) })
    }

    useEffect(() => {

        fetchData()
    }, [])

    const filterCategory = (e) => {
        setcategory(e.target.value)
    }

    let filteredData = data;

    if (category !== "") {
        filteredData = data.filter(job => job.Category === category);
    }


    return (
        <div>
            <NavBar />
            <div className="container" style={{ paddingBottom: '200px' }}>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <label htmlFor="" className="form-label"></label>
                            <select className="form-select mb-3" onChange={filterCategory}>
                                <option value="">All Categories</option>
                                <option value="Development">Development</option>
                                <option value="Design">Design</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Other">Other</option>
                            </select>

                            {filteredData.map(
                                (value, index) =>
                                    < div className="col-12 col-sml-12 col-md-12 col-lg-6 col-xl-6 col-xxl-4" >
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{value.jobTitle}</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary">Company Name: {value.companyName}</h6>
                                                <p className="card-text">Category: {value.Category}</p>
                                                <p className="card-text">Location: {value.location}</p>
                                                <p className="card-text">Description: {value.description}</p>
                                            </div>
                                        </div>
                                    </div >

                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default JobView


