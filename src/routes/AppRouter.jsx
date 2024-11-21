import { Route, Routes } from "react-router-dom";
import { BlogRouter } from "../features/blog/routes";
import { SecurityRouter } from "../features/security/routes";
import { AdministrationRouter } from "../features/administration/routes/AdministrationRouter";
import { ProtectedLayout } from "../shared/components";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/security/*" element={<SecurityRouter />} />

      <Route element={<ProtectedLayout />}>
        <Route path="/administration/*" element={<AdministrationRouter />} />
      </Route>

      <Route path="/*" element={<BlogRouter />} />
    </Routes>
  );
};
