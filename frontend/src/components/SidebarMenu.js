import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SidebarMenu = ({ module }) => {
  const [openMenus, setOpenMenus] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const menus = {
    admin: [
      { name: "Dashboard", path: "/admin/dashboard" },
      {
        name: "User Management",
        subMenu: [
          { name: "List Users", path: "/admin/users" },
          { name: "Add User", path: "/admin/users/add" },
          { name: "Roles", path: "/admin/roles" },
          { name: "Permissions", path: "/admin/permissions" },
        ],
      },
      { name: "Journals", path: "/admin/journals" },
      { name: "Settings", path: "/admin/settings" },
    ],
    journal: [
      { name: "Dashboard", path: "/journal" },
      { name: "Articles", path: "/journal/articles" },
      { name: "Reports", path: "/journal/reports" },
    ],
  };

  const moduleMenu = menus[module] || [];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/auth/login");
  };

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div className="sidebar d-flex flex-column" style={{ flex: 1 }}>
        <nav className="mt-2 flex-grow-1">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            style={{ flex: 1 }}
          >
            {moduleMenu.map((item, index) => (
              <li
                key={index}
                className={`nav-item ${item.subMenu ? "has-treeview" : ""} ${
                  openMenus[item.name] ? "menu-open" : ""
                }`}
              >
                {item.subMenu ? (
                  <>
                    <p
                      className={`nav-link ${
                        openMenus[item.name] ? "active" : ""
                      }`}
                      style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                      onClick={() => toggleMenu(item.name)}
                    >
                      <span>{item.name}</span>
                      <i
                        className={`fas fa-angle-left ${
                          openMenus[item.name] ? "rotate" : ""
                        }`}
                      ></i>
                    </p>
                    <ul className="nav nav-treeview">
                      {item.subMenu.map((sub, subIdx) => (
                        <li className="nav-item" key={subIdx}>
                          <Link
                            to={sub.path}
                            className={`nav-link ${
                              isActive(sub.path) ? "active" : ""
                            }`}
                          >
                            <p style={{ marginLeft: "15px" }}>{sub.name}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`nav-link ${isActive(item.path) ? "active" : ""}`}
                  >
                    <p>{item.name}</p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout button fixed at bottom */}
        <div className="mt-auto p-3">
          <button className="btn btn-danger w-100" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <style>
        {`
          .fa-angle-left.rotate {
            transform: rotate(-90deg);
            transition: transform 0.3s;
          }
          .nav-treeview .nav-link p {
            padding-left: 20px;
          }
          .nav-link.active {
            background-color: #1e3a8a;
            color: white;
          }
          .nav-link.active p {
            color: white;
          }
        `}
      </style>
    </aside>
  );
};

export default SidebarMenu;
