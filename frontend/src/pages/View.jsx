import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import UseApi from "@/hooks/UseApi"

const View = () => {
  const { id } = useParams()
  const [viewData, setViewData] = useState({})
  const { data, loading, fetchData, error } = UseApi()

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
  return (
    <section className="bg-black min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container w-50 mx-auto bg-dark py-3 px-3 rounded">
        {error && <h1 className="text-center text-danger">{error}</h1>}
        <h1 className="text-white text-center">View Data of ID: {id} </h1>
        <br />
        <br />
        {viewData && (
          <>
            <div className="d-flex justify-content-between align-items-center w-100 mb-3 border-bottom pb-3">
              <h4 className="text-white">Name:</h4>
              <p className="text-light my-auto">{viewData.name}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center w-100 mb-3 border-bottom pb-3">
              <h4 className="text-white">Email:</h4>
              <p className="text-light my-auto">{viewData.email}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center w-100 mb-3 border-bottom pb-3">
              <h4 className="text-white">Phone Number:</h4>
              <p className="text-light my-auto">{viewData.phone_number}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center w-100 mb-3 border-bottom pb-3">
              <h4 className="text-white">City:</h4>
              <p className="text-light my-auto">{viewData.city}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center w-100 border-bottom pb-3 mb-3">
              <h4 className="text-white">Message:</h4>
              <p className="text-light my-auto">{viewData.message}</p>
            </div>
            <Link to="/" className="btn btn-success btn-md w-100">
              Back
            </Link>
          </>
        )}
      </div>
    </section>
  )
}

export default View
