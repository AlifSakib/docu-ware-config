import { useState } from "react";
import UsersTable from "../../../components/specific/configuration/user-management.tsx/users/users";
import RolesTable from "../../../components/specific/configuration/user-management.tsx/roles/roles";
import GroupsTable from "../../../components/specific/configuration/user-management.tsx/groups";
import FunctionProfileTable from "../../../components/specific/configuration/user-management.tsx/function-profiles";
import "./user-management.css";
import { Link } from "react-router-dom";

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

  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "City",
      accessor: "city",
    },
  ];

  // Define the data for the table
  const data = [
    {
      name: "John Doe",
      age: 30,
      city: "New York",
    },
    {
      name: "Jane Doe",
      age: 25,
      city: "Los Angeles",
    },
    {
      name: "Peter Pan",
      age: 10,
      city: "Neverland",
    },
    {
      name: "Alice Wonderland",
      age: 22,
      city: "Wonderland",
    },
    {
      name: "Harry Potter",
      age: 20,
      city: "Hogwarts",
    },
    {
      name: "Hermione Granger",
      age: 20,
      city: "Hogwarts",
    },
    {
      name: "Ron Weasley",
      age: 20,
      city: "Hogwarts",
    },
    {
      name: "Bruce Wayne",
      age: 35,
      city: "Gotham",
    },
    {
      name: "Clark Kent",
      age: 35,
      city: "Metropolis",
    },
    {
      name: "Diana Prince",
      age: 3000,
      city: "Themyscira",
    },
    {
      name: "Barry Allen",
      age: 28,
      city: "Central City",
    },
    {
      name: "Hal Jordan",
      age: 32,
      city: "Coast City",
    },
    {
      name: "Arthur Curry",
      age: 33,
      city: "Atlantis",
    },
    {
      name: "Victor Stone",
      age: 25,
      city: "Detroit",
    },
    {
      name: "Steve Rogers",
      age: 100,
      city: "Brooklyn",
    },
    {
      name: "Tony Stark",
      age: 40,
      city: "Malibu",
    },
    {
      name: "Natasha Romanoff",
      age: 35,
      city: "New York",
    },
    {
      name: "Bruce Banner",
      age: 40,
      city: "Dayton",
    },
    {
      name: "Thor Odinson",
      age: 1500,
      city: "Asgard",
    },
    {
      name: "Loki Laufeyson",
      age: 1500,
      city: "Asgard",
    },
  ];

  return (
    <>
      <div className="user-management-main-container">
        <div className="user-management-container">
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
            <Link to="/configuration/user-management/create-user">
              <button className="add-user-btn">Create User</button>
            </Link>
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
      <div></div>
    </>
  );
};

export default UserManagementPage;
