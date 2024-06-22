import { useState } from "react";
import UsersTable from "../../../components/specific/configuration/user-management.tsx/users/users";
import RolesTable from "../../../components/specific/configuration/user-management.tsx/roles/roles";
import GroupsTable from "../../../components/specific/configuration/user-management.tsx/groups";
import FunctionProfileTable from "../../../components/specific/configuration/user-management.tsx/function-profiles";
import "./user-management.css";

const UserManagementPage = () => {
  const [selectedTab, setSelectedTab] = useState("users");
  const [searchTerm, setSearchTerm] = useState("");

  const renderTabContent = () => {
    switch (selectedTab) {
      case "users":
        return <UsersTable />;
      case "roles":
        return <RolesTable />;
      case "groups":
        return <GroupsTable />;
      case "functionProfiles":
        return <FunctionProfileTable />;
      default:
        return null;
    }
  };
  return (
    <div>
      <div className="container">
        <div className="tabs">
          <div
            className={`tab ${selectedTab === "users" ? "active" : ""}`}
            onClick={() => setSelectedTab("users")}
          >
            Users
          </div>
          <div
            className={`tab ${selectedTab === "roles" ? "active" : ""}`}
            onClick={() => setSelectedTab("roles")}
          >
            Roles
          </div>
          <div
            className={`tab ${selectedTab === "groups" ? "active" : ""}`}
            onClick={() => setSelectedTab("groups")}
          >
            Groups
          </div>
          <div
            className={`tab ${
              selectedTab === "functionProfiles" ? "active" : ""
            }`}
            onClick={() => setSelectedTab("functionProfiles")}
          >
            Function Profiles
          </div>
        </div>
        <div className="controls">
          <button className="add-user-btn">Add New User</button>
          <input
            type="text"
            className="search-field"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="tab-content">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default UserManagementPage;
