import React from "react";
import { Routes, Route, useLocation, Navigate, Outlet } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Landing from "./pages/LandignPage/Landing";
import Login from "./pages/Login";

// Admin/User Pages
import AdminDashboard from "./modules/Admin/AdminDashboard";
import ListUsers from "./pages/Users/ListUsers";
import AddUser from "./pages/Users/AddUser";
import ListRoles from "./pages/Roles/ListRoles";
import AddRole from "./pages/Roles/AddRole";
import ListPermissions from "./pages/Permissions/ListPermissions";
import AddPermission from "./pages/Permissions/AddPermission";
import ListDepartments from "./pages/Departments/ListDepartments";
import AddDepartment from "./pages/Departments/AddDepartment";

// Modules
import JournalDashboard from "./modules/Journal/JournalDashboard";
import EbookDashboard from "./modules/Ebooks/EbookDashboard";
import LibraryDashboard from "./modules/Library/LibraryDashboard";
import WikipediaDashboard from "./modules/Wikipedia/WikipediaDashboard";
import RepositoryDashboard from "./modules/Repository/RepositoryDashboard";
import ResearchersDashboard from "./modules/Researchers/ResearchersDashboard";
import ManuscriptList from './modules/Journal/pages/ManuscriptList';
import ManuscriptCreate from './modules/Journal/pages/ManuscriptCreate';

function App() {
  const location = useLocation();
  const hideSidebar = location.pathname.startsWith("/auth/login") || location.pathname === "/";

  // Layout wrapper for routes that need sidebar
  const LayoutWrapper = () => <Layout hideSidebar={hideSidebar}><Outlet /></Layout>;

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/auth/login" element={<Login />} />

      {/* All routes that need layout */}
      <Route element={<LayoutWrapper />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* User Management */}
        <Route path="/admin/users" element={<ListUsers />} />
        <Route path="/admin/users/add" element={<AddUser />} />

        {/* Roles & Permissions */}
        <Route path="/admin/roles" element={<ListRoles />} />
        <Route path="/admin/roles/add" element={<AddRole />} />
        <Route path="/admin/permissions" element={<ListPermissions />} />
        <Route path="/admin/permissions/add" element={<AddPermission />} />

        {/* Departments */}
        <Route path="/admin/departments" element={<ListDepartments />} />
        <Route path="/admin/departments/add" element={<AddDepartment />} />

        {/* Modules */}
        {/* Journal Management */}
        <Route path="/journal" element={<JournalDashboard />} />
        <Route path="/journal/manuscripts" element={<ManuscriptList />} />
        <Route path="/journal/create-manuscript" element={<ManuscriptCreate />} />
        <Route path="/journal/decisions" element={<JournalDashboard />} />
        <Route path="/journal/journal" element={<JournalDashboard />} />
        <Route path="/journal/workflow" element={<JournalDashboard />} />


        <Route path="/ebooks" element={<EbookDashboard />} />
        <Route path="/library" element={<LibraryDashboard />} />
        <Route path="/wikipedia" element={<WikipediaDashboard />} />
        <Route path="/repository" element={<RepositoryDashboard />} />
        <Route path="/researchers" element={<ResearchersDashboard />} />

        {/* Journal */}
      </Route>

      {/* Fallback redirect if route not found */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
