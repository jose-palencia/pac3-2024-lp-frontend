import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../features/security/store";
import { rolesListConstant } from "../constants";

export const ProtectedLayout = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const roles = useAuthStore((state) => state.roles);

  if (!isAuthenticated || !roles.some(role => [rolesListConstant.ADMIN, rolesListConstant.AUTHOR].includes(role) )) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
