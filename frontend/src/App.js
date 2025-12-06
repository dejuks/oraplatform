import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";

import ListUsers from "./pages/Users/ListUsers";
import AddUser from "./pages/Users/AddUser";
import ListRoles from "./pages/Roles/ListRoles";
import AddRole from "./pages/Roles/AddRole";
import ListPermissions from "./pages/Permissions/ListPermissions";
import AddPermission from "./pages/Permissions/AddPermission";
import ListDepartments from "./pages/Departments/ListDepartments";
import AddDepartment from "./pages/Departments/AddDepartment";

import Login from "./pages/Login";

// MODULES
import JournalDashboard from "./modules/Journal/JournalDashboard";
import EbookDashboard from "./modules/Ebooks/EbookDashboard";
import LibraryDashboard from "./modules/Library/LibraryDashboard";
import WikipediaDashboard from "./modules/Wikipedia/WikipediaDashboard";
import RepositoryDashboard from "./modules/Repository/RepositoryDashboard";
import ResearchersDashboard from "./modules/Researchers/ResearchersDashboard";
import AdminDashboard from "./modules/Admin/AdminDashboard";
import Landing from "./pages/LandignPage/Landing";

function App() {
  const location = useLocation();
     const hideSidebar = location.pathname.startsWith("/auth/login") || location.pathname === "/";


  return (
    <Layout hideSidebar={hideSidebar} >
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/" element={<Landing />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="/admin/users" element={<ListUsers />} />
        <Route path="admin/users/add" element={<AddUser />} />
        <Route path="/roles" element={<ListRoles />} />
        <Route path="/roles/add" element={<AddRole />} />
        <Route path="/permissions" element={<ListPermissions />} />
        <Route path="/permissions/add" element={<AddPermission />} />
        <Route path="/departments" element={<ListDepartments />} />
        <Route path="/department/add" element={<AddDepartment />} />

        {/* MODULE ROUTES */}
        <Route path="/journal" element={<JournalDashboard />} />
        <Route path="/ebooks" element={<EbookDashboard />} />
        <Route path="/library" element={<LibraryDashboard />} />
        <Route path="/wikipedia" element={<WikipediaDashboard />} />
        <Route path="/repository" element={<RepositoryDashboard />} />
        <Route path="/researchers" element={<ResearchersDashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;
