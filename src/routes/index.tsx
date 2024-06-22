import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConfigurationLayout from "../layout/configuration-layout/configuration-layout";
import MainLayout from "../layout/main-layout/main-layout";
import UserManagementPage from "../pages/configuration/user-management";
import CreateNewUser from "../components/specific/configuration/user-management.tsx/create-user";

const HomePage = lazy(() => import("../pages/dashboard/home-page"));
const ConfigurationHome = lazy(
  () => import("../pages/configuration/home-page")
);

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route element={<ConfigurationLayout />}>
            <Route path="/configuration" element={<ConfigurationHome />} />
            <Route
              path="/configuration/user-management"
              element={<UserManagementPage />}
            />
            <Route
              path="/configuration/user-management/create-user"
              element={<CreateNewUser />}
            />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
