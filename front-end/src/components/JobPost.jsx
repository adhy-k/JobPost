import axios, { Axios } from 'axios'
import React, { useState } from 'react'
import { Helmet } from "react-helmet";
import NavBar from './NavBar'
import Footer from './Footer'

const JobPost = () => {

    const [input, setInput] = useState({
        "jobTitle": "",
        "companyName": "",
        "Category": "",
        "location": "",
        "description": ""
    })

    const inputHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const readValues = () => {
        let newInput = {
            "jobTitle": input.jobTitle,
            "companyName": input.companyName,
            "Category": input.Category,
            "location": input.location,
            "description": input.description
        }
        axios.post("http://localhost:3030/jobs", newInput).then((res) => {
            console.log(res.data);
            alert("Job Posted Successfully")
            setInput({
                jobTitle: "",
                companyName: "",
                Category: "",
                location: "",
                description: ""
            });
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <Helmet>
                <title>Find Your Dream Job</title>
            </Helmet>
            <NavBar />
            <div className="container" style={{ paddingBottom: '200px' }}>
                <p className="h1 mb-4 text-center mt-4">Post Jobs</p>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Job Title</label>
                                <input type="text" className="form-control" name='jobTitle' value={input.jobTitle} onChange={inputHandler} />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Company Name</label>
                                <input type="text" className="form-control" name='companyName' value={input.companyName} onChange={inputHandler} />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Category</label>
                                <select
                                    className="form-select"
                                    name='Category' value={input.Category} onChange={inputHandler}
                                >
                                    <option value="">Select Category</option>
                                    <option value="Development">Development</option>
                                    <option value="Design">Design</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Other">Other</option>
                                </select>

                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Location</label>
                                <input type="text" className="form-control" name='location' value={input.location} onChange={inputHandler} />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Description</label>
                                <input type="text" className="form-control" name='description' value={input.description} onChange={inputHandler} />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValues}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobPost