import React, { useEffect, useState } from "react"
import { handleChange } from "../utils/utils"
import { Link, useParams } from "react-router-dom"
import UseApi from "@/hooks/UseApi"

const Edit = () => {
  const { id } = useParams()
  const [viewData, setViewData] = useState({})
  const { data, loading, fetchData, error } = UseApi()
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone_number: "",
    city: "",
    message: ""
  })

  useEffect(() => {
    const loadData = async () => {
      if (!loading) {
        await fetchData()
      }
    }
    loadData()
  }, [])

  useEffect(() => {
    if (!loading && data && id) {
      const filterData = data.find(items => items.id === parseInt(id))
      setViewData(filterData)
    }
  }, [loading, data, id])

  useEffect(() => {
    if (viewData) {
      setFields({
        name: viewData.name || "",
        email: viewData.email || "",
        phone_number: viewData.phone_number || "",
        city: viewData.city || "",
        message: viewData.message || ""
      })
    }
  }, [viewData])

  return (
    <section className="bg-black min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <form action="#" className="row g-3 bg-light pb-4 px-3 rounded">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="text-center">Update Data</h1>
            <Link to="/" className="btn btn-success btn-md">
              Back
            </Link>
          </div>
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
          <button type="submit" className="btn btn-info btn-lg">
            Update
          </button>
        </form>
      </div>
    </section>
  )
}

export default Edit
