import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";

const Layout = ({ children }) => {
  const location = useLocation();
    const hideSidebar = location.pathname.startsWith("/auth/login") || location.pathname === "/";

  const [module, setModule] = useState("");

  useEffect(() => {
    // Determine current module based on URL
    const path = location.pathname.split("/")[1]; // e.g., 'journal'
    setModule(path);
  }, [location.pathname]);

  useEffect(() => {
    if (window.$) window.$(".nav-sidebar").treeview();
  }, []);

  return (
    <div className="wrapper hold-transition sidebar-mini layout-fixed">
      
      {!hideSidebar && (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                <i className="fas fa-bars"></i>
              </a>
            </li>
          </ul>
        </nav>
      )}

      {!hideSidebar && <SidebarMenu module={module} />}

      <div className="content-wrapper p-3">
        <section className="content container-fluid">{children}</section>
      </div>
    </div>
  );
};

export default Layout;
