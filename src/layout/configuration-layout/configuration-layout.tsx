// src/layouts/MainLayout.js

import { Outlet } from "react-router-dom";
import ConfigurationsNav from "../../components/common/navbar/configaration-nav";

const ConfigurationLayout = () => {
  return (
    <div>
      <ConfigurationsNav />
      <main>
        <Outlet /> {/* Render matched child route */}
      </main>
    </div>
  );
};

export default ConfigurationLayout;
