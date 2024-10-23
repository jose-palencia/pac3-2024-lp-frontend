import { Route, Routes } from "react-router-dom"
import { BlogRouter } from "../features/blog/routes"
import { SecurityRouter } from "../features/security/routes"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/security/*" element={<SecurityRouter />} />
        <Route path="/*" element={<BlogRouter />} />
    </Routes>
  )
}
