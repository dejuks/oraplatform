import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import ListUsers from "./pages/Users/ListUsers";
import AddUser from "./pages/Users/AddUser";
import ListRoles from "./pages/Roles/ListRoles";
import AddRole from "./pages/Roles/AddRole";
import ListPermissions from "./pages/Permissions/ListPermissions";
import AddPermission from "./pages/Permissions/AddPermission";
import ListDepartments from "./pages/Departments/ListDepartments";
import AddDepartment from "./pages/Departments/AddDepartment";
import Login from "./pages/Login";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<ListUsers />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/roles" element={<ListRoles />} />
        <Route path="/roles/add" element={<AddRole />} />
        <Route path="/permissions" element={<ListPermissions />} />
        <Route path="/permissions/add" element={<AddPermission />} />
        <Route path="/departments" element={<ListDepartments />} />
        <Route path="/departments/add" element={<AddDepartment />} />
      </Routes>
    </Layout>
  );
}

export default App;
