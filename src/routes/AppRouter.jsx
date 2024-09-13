import { Route, Routes } from "react-router-dom"
import { BlogRouter } from "../features/blog/routes"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="*" element={<BlogRouter />} />
    </Routes>
  )
}
