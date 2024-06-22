import { Link } from "react-router-dom";

const ConfigurationHomePage = () => {
  return (
    <div>
      <h1>Configuration Home Page</h1>
      <Link to="/settings/user-management">User Management</Link>
    </div>
  );
};

export default ConfigurationHomePage;
