import React, { useEffect } from "react";
import SidebarMenu from "./SidebarMenu";

const Layout = ({ children }) => {
  useEffect(() => {
    if (window.$) {
      window.$(() => window.$(".nav-sidebar").each(function () {
        window.$(this).treeview();
      }));
    }
  }, []);

  return (
    <div className="hold-transition sidebar-mini layout-fixed">
      <div className="wrapper">

        {/* NAVBAR */}
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                <i className="fas fa-bars"></i>
              </a>
            </li>
          </ul>
        </nav>

        {/* SIDEBAR */}
        <SidebarMenu />

        {/* FULL CONTENT AREA */}
       <div className="content-wrapper p-0">
  <section className="content p-0 m-0 w-100 h-100">{children}</section>
</div>

      </div>
    </div>
  );
};

export default Layout;
