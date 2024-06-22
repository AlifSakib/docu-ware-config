// src/layouts/MainLayout.js

import { Outlet } from "react-router-dom";

const MainLayout = () => {
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

export default MainLayout;
