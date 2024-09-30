import React, { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Loading from "@/components/Loading"

const Home = lazy(() => import("@/pages/Home"))
const View = lazy(() => import("@/pages/View"))
const Create = lazy(() => import("@/pages/Create"))
const Edit = lazy(() => import("@/pages/Edit"))

const Routing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </Suspense>
  )
}

export default Routing
