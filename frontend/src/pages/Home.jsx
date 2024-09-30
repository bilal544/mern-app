import React, { useEffect } from "react"
import UseApi from "@/hooks/UseApi"
import { Link } from "react-router-dom"

const Home = () => {
  const { data, loading, fetchData, error } = UseApi()

  useEffect(() => {
    const loadData = async () => {
      if (!loading && fetchData) {
        await fetchData()
      }
    }
    loadData()
  }, [])

  return (
    <section className="bg-black min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        {/* showing error message */}
        {error && <p className="text-danger text-center">{error}</p>}
        {/* showing error message end*/}
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="text-white text-center">All Records</h1>
          <Link to="/create" className="btn btn-success btn-md">
            Add New
          </Link>
        </div>
        <table className="table table-striped table-white table-bordered mt-4 text-center table-responsive">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map(items => (
                <tr key={items.id}>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>{items.phone_number}</td>
                  <td>{items.city}</td>
                  <td>
                    <div className="d-flex align-items-center gap-2 justify-content-center">
                      <Link to={`/view/${items.id}`} className="btn btn-success btn-sm">
                        View
                      </Link>
                      <Link to={`/edit/${items.id}`} className="btn btn-info btn-sm">
                        Update
                      </Link>
                      <Link to={`/delete/${items.id}`} className="btn btn-danger btn-sm">
                        Delete
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Home
