import { Navigate, Route, Routes } from 'react-router-dom';
import {Nav, Footer} from '../components';
import {HomePage, BlogPage, PostPage} from '../pages';

export const BlogRouter = () => {
  return (
    <div className="overflow-x-hidden bg-gray-100 w-screen h-screen bg-hero-pattern bg-no-repeat bg-cover">
      <Nav />
      <div className="px-6 py-8">
        <div className="container flex justify-between mx-auto">
          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/blog/post/:id' element={<PostPage />} />
            <Route path='/*' element={<Navigate to={"/home"} />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  )
}
