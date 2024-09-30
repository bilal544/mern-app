import React, { useState } from "react"
import { handleChange } from "../utils/utils"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const Create = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone_number: "",
    city: "",
    message: ""
  })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const resp = await axios.post(`${BASE_URL}/data.json`, fields, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (resp && resp.status === 200) {
        setFields({
          name: "",
          email: "",
          phone_number: "",
          city: "",
          message: ""
        })
        toast.success("Successfully created")
        navigate("/")
      }
    } catch (error) {
      toast.error("Error creating", error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <section className="bg-black min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <form id="form" className="row g-3 bg-light pb-4 px-3 rounded" onSubmit={handleSubmit}>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="text-center">Add Record</h1>
            <Link to="/" className="btn btn-success btn-md">
              Home
            </Link>
          </div>
          <span className="text-danger font-medium">All fields are required*</span>
          <div className="col-md-6">
            <input
              type="name"
              className="form-control"
              name="name"
              placeholder="Name"
              value={fields.name}
              onChange={e => handleChange(setFields, e)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={fields.email}
              onChange={e => handleChange(setFields, e)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              name="phone_number"
              value={fields.phone_number}
              onChange={e => handleChange(setFields, e)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="city"
              className="form-control"
              placeholder="City"
              name="city"
              value={fields.city}
              onChange={e => handleChange(setFields, e)}
            />
          </div>
          <div className="col-md-12">
            <textarea
              cols={5}
              rows={6}
              name="message"
              id="message"
              className="form-control"
              placeholder="Your Message Type Here...."
              value={fields.message}
              onChange={e => handleChange(setFields, e)}
            />
          </div>
          <div className="btn-group">
            <button disabled={loading} type="submit" className="btn btn-success btn-lg">
              Submit
            </button>
            <button type="reset" className="btn btn-dark btn-lg">
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Create
