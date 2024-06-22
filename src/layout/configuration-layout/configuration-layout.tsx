// src/layouts/MainLayout.js

import { Outlet } from "react-router-dom";

const ConfigurationLayout = () => {
  return (
    <div>
      <header>Header Content</header>
      <main>
        <Outlet /> {/* Render matched child route */}
      </main>
      <footer>Footer Content</footer>
    </div>
  );
};

export default ConfigurationLayout;
