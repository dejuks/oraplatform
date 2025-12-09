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
          { name: "Add User", path: "/users/add" },
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
      {
        name: "Manuscripts",
        subMenu: [
          { name: "Submit Manuscript", path: "create-manuscrip" },
          { name: "List Submissions", path: "/journal/manuscripts" },
          { name: "Upload Revision", path: "/journal/manuscripts/revision" },
        ],
      },
      {
        name: "Reviews",
        subMenu: [
          { name: "Assigned Reviews", path: "/journal/reviews/assigned" },
          { name: "Submit Review", path: "/journal/reviews/submit" },
          { name: "Review History", path: "/journal/reviews/history" },
        ],
      },
      {
        name: "Editorial Decisions",
        subMenu: [
          { name: "Pending Decisions", path: "/journal/decisions/pending" },
          { name: "Final Decisions", path: "/journal/decisions/final" },
        ],
      },
      {
        name: "Journal Management",
        subMenu: [
          { name: "Finalize Manuscripts", path: "/journal/journal/finalize" },
          { name: "Assign DOI/ISSN", path: "/journal/journal/metadata" },
          { name: "Publication Dashboard", path: "/journal/journal/dashboard" },
        ],
      },
      {
        name: "Workflow & SLA",
        subMenu: [
          { name: "Monitor Workflow", path: "/journal/workflow/monitor" },
          { name: "Plagiarism Checks", path: "/journal/workflow/plagiarism" },
          { name: "Notifications & Alerts", path: "/journal/workflow/notifications" },
        ],
      },
    ],
    library: [
      { name: "Dashboard", path: "/library" },
      {
        name: "Books",
        subMenu: [
          { name: "List Books", path: "/library/books" },
          { name: "Add Book", path: "/library/books/add" },
          { name: "Categories", path: "/library/books/categories" },
        ],
      },
      {
        name: "Members",
        subMenu: [
          { name: "List Members", path: "/library/members" },
          { name: "Add Member", path: "/library/members/add" },
          { name: "Membership Types", path: "/library/members/types" },
        ],
      },
      {
        name: "Transactions",
        subMenu: [
          { name: "Issue Books", path: "/library/transactions/issue" },
          { name: "Return Books", path: "/library/transactions/return" },
          { name: "Transaction History", path: "/library/transactions/history" },
        ],
      },
      { name: "Reports", path: "/library/reports" },
      { name: "Settings", path: "/library/settings" },
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
    <aside
      className="main-sidebar sidebar-dark-primary elevation-4"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
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
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
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
          /* Sidebar background */
          .sidebar {
            background-color: #ffffff; /* White background */
          }

          /* Main menu links */
          .nav-sidebar .nav-link {
            color: #000000; /* Black text */
            font-weight: 500;
            transition: all 0.3s;
          }

          /* Active link */
          .nav-sidebar .nav-link.active {
            background-color: #3c8dbc; /* Primary color */
            color: #fff;
          }

          /* Hover effect */
          .nav-sidebar .nav-link:hover {
            background-color: #367fa9;
            color: #fff;
          }

          /* Submenu treeview */
          .nav-sidebar .nav-treeview {
            padding-left: 15px;
            max-height: 0;
            overflow: hidden;
            transition: all 0.3s;
          }

          .nav-item.menu-open > .nav-treeview {
            max-height: 500px; /* Show submenu */
          }

          /* Submenu links */
          .nav-sidebar .nav-treeview .nav-link {
            color: #000000;
            font-size: 0.95rem;
          }

          /* Submenu active */
          .nav-sidebar .nav-treeview .nav-link.active {
            color: #fff;
            font-weight: 600;
          }

          /* Angle icon for collapsible menus */
          .nav-sidebar .nav-link i.right.fas.fa-angle-left {
            transition: transform 0.3s;
          }

          /* Rotate arrow when menu is open */
          .nav-item.menu-open > .nav-link i.right.fas.fa-angle-left {
            transform: rotate(-90deg);
          }

          /* Badge style */
          .badge {
            font-size: 0.7rem;
            font-weight: 500;
          }
        `}
      </style>
    </aside>
  );
};

export default SidebarMenu;
