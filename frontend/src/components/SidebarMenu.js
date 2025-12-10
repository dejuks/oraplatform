import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SidebarMenu = ({ module }) => {
  const [openMenus, setOpenMenus] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  // Load Font Awesome if not already loaded
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    link.integrity = 'sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==';
    link.crossOrigin = 'anonymous';
    
    if (!document.querySelector('link[href*="font-awesome"]')) {
      document.head.appendChild(link);
    }
  }, []);

  const menus = {
    admin: [
      { 
        name: "Dashboard", 
        path: "/admin/dashboard",
        icon: "fas fa-tachometer-alt"
      },
      {
        name: "User Management",
        icon: "fas fa-user-cog",
        subMenu: [
          { name: "List Users", path: "/admin/users", icon: "fas fa-users" },
          { name: "Add User", path: "/users/add", icon: "fas fa-user-plus" },
          { name: "Roles", path: "/admin/roles", icon: "fas fa-user-tag" },
          { name: "Permissions", path: "/admin/permissions", icon: "fas fa-key" },
        ],
      },
      { 
        name: "Journals", 
        path: "/admin/journals",
        icon: "fas fa-book-open"
      },
      { 
        name: "Settings", 
        path: "/admin/settings",
        icon: "fas fa-cogs"
      },
    ],
    journal: [
      { 
        name: "Dashboard", 
        path: "/journal",
        icon: "fas fa-tachometer-alt"
      },
      { 
        name: "Articles", 
        path: "/journal/articles",
        icon: "fas fa-newspaper"
      },
      { 
        name: "Reports", 
        path: "/journal/reports",
        icon: "fas fa-chart-pie"
      },
      {
        name: "Manuscripts",
        icon: "fas fa-file-alt",
        subMenu: [
          { name: "Submit Manuscript", path: "create-manuscrip", icon: "fas fa-upload" },
          { name: "List Submissions", path: "/journal/manuscripts", icon: "fas fa-list-ol" },
          { name: "Upload Revision", path: "/journal/manuscripts/revision", icon: "fas fa-sync-alt" },
        ],
      },
      {
        name: "Reviews",
        icon: "fas fa-clipboard-check",
        subMenu: [
          { name: "Assigned Reviews", path: "/journal/reviews/assigned", icon: "fas fa-tasks" },
          { name: "Submit Review", path: "/journal/reviews/submit", icon: "fas fa-paper-plane" },
          { name: "Review History", path: "/journal/reviews/history", icon: "fas fa-history" },
        ],
      },
      {
        name: "Editorial Decisions",
        icon: "fas fa-gavel",
        subMenu: [
          { name: "Pending Decisions", path: "/journal/decisions/pending", icon: "fas fa-clock" },
          { name: "Final Decisions", path: "/journal/decisions/final", icon: "fas fa-check-double" },
        ],
      },
      {
        name: "Journal Management",
        icon: "fas fa-tasks",
        subMenu: [
          { name: "Finalize Manuscripts", path: "/journal/journal/finalize", icon: "fas fa-check-circle" },
          { name: "Assign DOI/ISSN", path: "/journal/journal/metadata", icon: "fas fa-hashtag" },
          { name: "Publication Dashboard", path: "/journal/journal/dashboard", icon: "fas fa-chart-line" },
        ],
      },
      {
        name: "Workflow & SLA",
        icon: "fas fa-project-diagram",
        subMenu: [
          { name: "Monitor Workflow", path: "/journal/workflow/monitor", icon: "fas fa-eye" },
          { name: "Plagiarism Checks", path: "/journal/workflow/plagiarism", icon: "fas fa-search" },
          { name: "Notifications & Alerts", path: "/journal/workflow/notifications", icon: "fas fa-bell" },
        ],
      },
    ],
    library: [
      { 
        name: "Dashboard", 
        path: "/library",
        icon: "fas fa-tachometer-alt"
      },
      {
        name: "Book Management",
        icon: "fas fa-book",
        subMenu: [
          { name: "Books", path: "/library/books", icon: "fas fa-book" },
          { name: "Manage Authors", path: "/library/authors", icon: "fas fa-user-edit" },
        
          { name: "Categories", path: "/library/categories", icon: "fas fa-tags" },
          { name: "Publishers", path: "/library/publishers", icon: "fas fa-print" },
        ],
      },
      {
        name: "Members",
        icon: "fas fa-users",
        subMenu: [
          { name: "List Members", path: "/library/members", icon: "fas fa-address-book" },
          { name: "Add Member", path: "/library/members/add", icon: "fas fa-user-plus" },
          { name: "Membership Types", path: "/library/members/types", icon: "fas fa-id-card" },
          { name: "Membership Status", path: "/library/members/status", icon: "fas fa-user-check" },
        ],
      },
      {
        name: "Transactions",
        icon: "fas fa-exchange-alt",
        subMenu: [
          { name: "Issue Books", path: "/library/transactions/issue", icon: "fas fa-book-reader" },
          { name: "Return Books", path: "/library/transactions/return", icon: "fas fa-undo-alt" },
          { name: "Transaction History", path: "/library/transactions/history", icon: "fas fa-history" },
          { name: "Overdue Items", path: "/library/transactions/overdue", icon: "fas fa-exclamation-triangle" },
          { name: "Renew Books", path: "/library/transactions/renew", icon: "fas fa-redo" },
        ],
      },
      {
        name: "Reservations",
        icon: "fas fa-calendar-check",
        subMenu: [
          { name: "New Reservations", path: "/library/reservations/new", icon: "fas fa-plus-circle" },
          { name: "Active Reservations", path: "/library/reservations/active", icon: "fas fa-calendar-alt" },
          { name: "Reservation History", path: "/library/reservations/history", icon: "fas fa-history" },
        ],
      },
      { 
        name: "Reports", 
        icon: "fas fa-chart-bar",
        subMenu: [
          { name: "Library Statistics", path: "/library/reports/statistics", icon: "fas fa-chart-line" },
          { name: "Usage Reports", path: "/library/reports/usage", icon: "fas fa-chart-pie" },
          { name: "Member Activity", path: "/library/reports/activity", icon: "fas fa-user-clock" },
          { name: "Inventory Reports", path: "/library/reports/inventory", icon: "fas fa-clipboard-list" },
        ],
      },
      { 
        name: "Settings", 
        icon: "fas fa-cogs",
        subMenu: [
          { name: "Library Settings", path: "/library/settings/general", icon: "fas fa-wrench" },
          { name: "Fine Configuration", path: "/library/settings/fines", icon: "fas fa-money-bill-wave" },
          { name: "Loan Policies", path: "/library/settings/policies", icon: "fas fa-file-contract" },
          { name: "Email Templates", path: "/library/settings/email", icon: "fas fa-envelope" },
        ],
      },
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
  const isSubMenuActive = (subMenu) => {
    return subMenu?.some(item => isActive(item.path));
  };

  // Fallback icons in case Font Awesome doesn't load
  const renderIcon = (iconClass) => {
    return <i className={`nav-icon ${iconClass}`}></i>;
  };

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="/" className="brand-link">
        <img
          src="/template/dist/img/ora.jpeg"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">
          {module.charAt(0).toUpperCase() + module.slice(1)} Management
        </span>
      </a>

      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {moduleMenu.map((item, index) => {
              const hasSubMenu = item.subMenu && item.subMenu.length > 0;
              const isMenuOpen = openMenus[item.name];
              const isActiveMenu = isActive(item.path) || isSubMenuActive(item.subMenu);

              return (
                <li
                  key={index}
                  className={`nav-item ${hasSubMenu ? 'has-treeview' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
                >
                  {hasSubMenu ? (
                    <>
                      <a 
                        href="#" 
                        className={`nav-link ${isActiveMenu ? 'active' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMenu(item.name);
                        }}
                      >
                        {renderIcon(item.icon)}
                        <p>
                          {item.name}
                          <i className="right fas fa-angle-left"></i>
                        </p>
                      </a>
                      <ul className="nav nav-treeview">
                        {item.subMenu.map((sub, subIdx) => (
                          <li className="nav-item" key={subIdx}>
                            <Link
                              to={sub.path}
                              className={`nav-link ${isActive(sub.path) ? 'active' : ''}`}
                            >
                              {renderIcon(sub.icon)}
                              <p>{sub.name}</p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                    >
                      {renderIcon(item.icon)}
                      <p>{item.name}</p>
                    </Link>
                  )}
                </li>
              );
            })}
            
            {/* Logout Menu Item */}
            <li className="nav-item">
              <a 
                href="#" 
                className="nav-link text-danger"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogout();
                }}
              >
                <i className="nav-icon fas fa-sign-out-alt"></i>
                <p>Logout</p>
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Sidebar Footer with User Info */}
        <div className="sidebar-footer mt-auto p-3 border-top">
          <div className="user-panel d-flex align-items-center">
            <div className="image">
              <i className="fas fa-user-circle img-circle elevation-2" style={{ 
                fontSize: '2rem', 
                color: '#6c757d',
                display: 'block'
              }}></i>
            </div>
            <div className="info ml-2">
              <a href="#" className="d-block text-sm">
                {module === "admin" ? "System Admin" : 
                 module === "journal" ? "Journal Editor" : 
                 "Librarian"}
              </a>
              <small className="text-muted">
                <i className="fas fa-circle text-success mr-1" style={{ fontSize: '0.6rem' }}></i>
                Online
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles for testing - remove if Font Awesome is loaded */}
      <style>
        {`
          /* Fallback styles if Font Awesome doesn't load */
          .fas {
            font-family: 'Font Awesome 5 Free' !important;
            font-weight: 900;
          }
          
          .fa-tachometer-alt:before { content: "\\f3fd"; }
          .fa-user-cog:before { content: "\\f4fe"; }
          .fa-users:before { content: "\\f0c0"; }
          .fa-user-plus:before { content: "\\f234"; }
          .fa-user-tag:before { content: "\\f507"; }
          .fa-key:before { content: "\\f084"; }
          .fa-book-open:before { content: "\\f518"; }
          .fa-cogs:before { content: "\\f085"; }
          .fa-newspaper:before { content: "\\f1ea"; }
          .fa-chart-pie:before { content: "\\f200"; }
          .fa-file-alt:before { content: "\\f15c"; }
          .fa-upload:before { content: "\\f093"; }
          .fa-list-ol:before { content: "\\f0cb"; }
          .fa-sync-alt:before { content: "\\f2f1"; }
          .fa-clipboard-check:before { content: "\\f46c"; }
          .fa-tasks:before { content: "\\f0ae"; }
          .fa-paper-plane:before { content: "\\f1d8"; }
          .fa-history:before { content: "\\f1da"; }
          .fa-gavel:before { content: "\\f0e3"; }
          .fa-clock:before { content: "\\f017"; }
          .fa-check-double:before { content: "\\f560"; }
          .fa-check-circle:before { content: "\\f058"; }
          .fa-hashtag:before { content: "\\f292"; }
          .fa-chart-line:before { content: "\\f201"; }
          .fa-project-diagram:before { content: "\\f542"; }
          .fa-eye:before { content: "\\f06e"; }
          .fa-search:before { content: "\\f002"; }
          .fa-bell:before { content: "\\f0f3"; }
          .fa-book:before { content: "\\f02d"; }
          .fa-user-edit:before { content: "\\f4ff"; }
          .fa-tags:before { content: "\\f02c"; }
          .fa-print:before { content: "\\f02f"; }
          .fa-address-book:before { content: "\\f2b9"; }
          .fa-id-card:before { content: "\\f2c2"; }
          .fa-user-check:before { content: "\\f4fc"; }
          .fa-exchange-alt:before { content: "\\f362"; }
          .fa-book-reader:before { content: "\\f5da"; }
          .fa-undo-alt:before { content: "\\f2ea"; }
          .fa-exclamation-triangle:before { content: "\\f071"; }
          .fa-redo:before { content: "\\f01e"; }
          .fa-calendar-check:before { content: "\\f274"; }
          .fa-plus-circle:before { content: "\\f055"; }
          .fa-calendar-alt:before { content: "\\f073"; }
          .fa-chart-bar:before { content: "\\f080"; }
          .fa-user-clock:before { content: "\\f4fd"; }
          .fa-clipboard-list:before { content: "\\f46d"; }
          .fa-wrench:before { content: "\\f0ad"; }
          .fa-money-bill-wave:before { content: "\\f53a"; }
          .fa-file-contract:before { content: "\\f56c"; }
          .fa-envelope:before { content: "\\f0e0"; }
          .fa-sign-out-alt:before { content: "\\f2f5"; }
          .fa-user-circle:before { content: "\\f2bd"; }
          .fa-circle:before { content: "\\f111"; }
          .fa-angle-left:before { content: "\\f104"; }
          
          /* Make sure icons are visible */
          .nav-icon {
            width: 1.5rem;
            text-align: center;
            margin-right: 0.5rem;
            display: inline-block;
          }
          
          /* Ensure sidebar text is visible */
          .nav-link p {
            display: inline-block;
            margin: 0;
          }
        `}
      </style>
    </aside>
  );
};

export default SidebarMenu;