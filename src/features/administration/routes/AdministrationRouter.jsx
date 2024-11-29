import { Navigate, Route, Routes } from "react-router-dom";
import { Footer, Nav } from "../../blog/components";
import {
  CategoriesPage,
  DashboardPage,
  DeleteCategoryPage,
  EditCategoryPage,
  NewCategoryPage,
  PostsPage,
  TagsPage,
  UsersPage,
} from "../pages";
import { Menu } from "../components";

export const AdministrationRouter = () => {
  return (
    <div className="overflow-x-hidden bg-gray-100 w-screen h-screen bg-hero-pattern bg-no-repeat bg-cover">
      <Nav />
      <div className="px-6 py-8">
        <div className="flex gap-4">
          <Menu />
          <div className="w-full">
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/categories/new" element={<NewCategoryPage />} />
              <Route path="/categories/edit/:id" element={<EditCategoryPage />} />
              <Route path="/categories/delete/:id" element={<DeleteCategoryPage />} />
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/tags" element={<TagsPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/*" element={<Navigate to={"/dashboard"} />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
