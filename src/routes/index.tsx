import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConfigurationLayout from "../layout/configuration-layout/configuration-layout";
import MainLayout from "../layout/main-layout/main-layout";
import UserManagementPage from "../pages/configuration/user-management";

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
            <Route path="/settings" element={<ConfigurationHome />} />
            <Route
              path="/settings/user-management"
              element={<UserManagementPage />}
            />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
