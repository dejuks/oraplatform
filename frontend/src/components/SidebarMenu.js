import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SidebarMenu.css";

const menuItems = [
  {
    label: "Dashboard",
    icon: "fas fa-tachometer-alt",
    to: "/admin/dashboard",
  },

  // ======================================================
  // 1️⃣ USER & SYSTEM ADMINISTRATION (FROM YOUR DOCUMENT)
  // ======================================================
  {
    label: "System Administration",
    icon: "fas fa-cogs",
    children: [
      { label: "Users", to: "/system/users" },
      { label: "Roles", to: "/system/roles" },
      { label: "Permissions", to: "/system/permissions" },
      { label: "Departments", to: "/system/departments" },
      { label: "System Logs", to: "/system/logs" },
      { label: "Email Templates", to: "/system/email-templates" },
      { label: "Security & Backups", to: "/system/security" },
      { label: "Workflow Settings", to: "/system/workflow-settings" },
    ],
  },
 // ======================================================
  // 4️⃣ JOURNAL MANAGEMENT SYSTEM (from your document)
  // ======================================================
  {
    label: "Journal Management",
    icon: "fas fa-journal-whills",
    children: [
      { label: "Journals", to: "/journal/list" },
      { label: "Journal Sections", to: "/journal/sections" },
      { label: "Editorial Policies", to: "/journal/policies" },
      { label: "Issues & Volumes", to: "/journal/issues" },
      { label: "Content Metadata", to: "/journal/metadata" },
      { label: "DOI Management", to: "/journal/doi" },
      { label: "Publication Schedule", to: "/journal/schedule" },
    ],
  },
  // ======================================================
  // 2️⃣ PHYSICAL LIBRARY MANAGEMENT MODULE
  // ======================================================
  {
    label: "Library Management",
    icon: "fas fa-book-reader",
    children: [
      { label: "Books Catalog", to: "/library/books" },
      { label: "Add New Book", to: "/library/books/new" },
      { label: "Book Categories", to: "/library/categories" },
      { label: "Shelves & Racks", to: "/library/shelves" },
      { label: "Book Copies / Inventory", to: "/library/inventory" },
      { label: "Publisher Management", to: "/library/publishers" },
      { label: "ISBN Management", to: "/library/isbn" },
    ],
  },
  {
    label: "Circulation",
    icon: "fas fa-exchange-alt",
    children: [
      { label: "Issue Book", to: "/circulation/issue" },
      { label: "Return Book", to: "/circulation/return" },
      { label: "Renew Book", to: "/circulation/renew" },
      { label: "Reservations / Hold", to: "/circulation/reservations" },
      { label: "Overdue & Fines", to: "/circulation/fines" },
      { label: "Lost / Damaged Books", to: "/circulation/lost" },
    ],
  },
  {
    label: "Members",
    icon: "fas fa-id-card",
    children: [
      { label: "Members List", to: "/members" },
      { label: "Register Member", to: "/members/new" },
      { label: "Membership Types", to: "/members/types" },
      { label: "Borrowing History", to: "/members/history" },
    ],
  },

  // ======================================================
  // 3️⃣ DIGITAL LIBRARY & RESEARCH ARCHIVE
  // ======================================================
  {
    label: "Digital Library",
    icon: "fas fa-cloud",
    children: [
      { label: "E-Books", to: "/digital/ebooks" },
      { label: "Audio Books", to: "/digital/audiobooks" },
      { label: "Research Publications", to: "/digital/research" },
      { label: "Institutional Repository", to: "/digital/repository" },
      { label: "Archives", to: "/digital/archives" },
    ],
  },

 

  // ======================================================
  // 5️⃣ ROLES (as described in your document)
  // ======================================================
  {
    label: "Editorial Roles",
    icon: "fas fa-user-tie",
    children: [
      { label: "Admin / Journal Manager", to: "/roles/journal-manager" },
      { label: "Editor-in-Chief", to: "/roles/editor-in-chief" },
      { label: "Associate Editor", to: "/roles/associate-editor" },
      { label: "Reviewers", to: "/roles/reviewers" },
      { label: "Authors", to: "/roles/authors" },
    ],
  },

  // ======================================================
  // 6️⃣ FULL JOURNAL WORKFLOW (11 Stages)
  // ======================================================
  {
    label: "Workflow Stages",
    icon: "fas fa-tasks",
    children: [
      { label: "Submission", to: "/workflow/submission" },
      { label: "Initial Screening", to: "/workflow/screening" },
      { label: "Reviewer Assignment", to: "/workflow/assignment" },
      { label: "Peer Review", to: "/workflow/review" },
      { label: "Decision & Recommendations", to: "/workflow/decision" },
      { label: "Author Revisions", to: "/workflow/revision" },
      { label: "Final Acceptance", to: "/workflow/acceptance" },
      { label: "Copyediting", to: "/workflow/copyediting" },
      { label: "Proofreading", to: "/workflow/proofing" },
      { label: "Typesetting & Formatting", to: "/workflow/typesetting" },
      { label: "Publication", to: "/workflow/publication" },
    ],
  },

  // ======================================================
  // 7️⃣ ADVANCED MODULES (PROFESSIONAL JOURNAL FEATURES)
  // ======================================================
  {
    label: "Advanced Tools",
    icon: "fas fa-tools",
    children: [
      { label: "Plagiarism Detection", to: "/tools/plagiarism" },
      { label: "ORCID Integration", to: "/tools/orcid" },
      { label: "Citation Manager", to: "/tools/citations" },
      { label: "Indexing & Abstracting", to: "/tools/indexing" },
    ],
  },
];


const MenuItem = ({ item, openMenu, toggleMenu, isActive }) => {
  const hasChildren = item.children?.length > 0;
  const isOpen = openMenu === item.label;

  return (
    <li className={`nav-item ${hasChildren && isOpen ? "menu-open" : ""}`}>
      {hasChildren ? (
        <>
          <a href="#!" className={`nav-link ${isOpen ? "active" : ""}`} onClick={() => toggleMenu(item.label)}>
            <i className={`nav-icon ${item.icon}`} />
            <p>{item.label}<i className="right fas fa-angle-left" /></p>
          </a>
          <ul className="nav nav-treeview">
            {item.children.map((child) => (
              <MenuItem key={child.label} item={child} openMenu={openMenu} toggleMenu={toggleMenu} isActive={isActive} />
            ))}
          </ul>
        </>
      ) : (
        <Link to={item.to} className={`nav-link ${isActive(item.to) ? "active" : ""}`}>
          <i className={`nav-icon ${item.icon}`} />
          <p>{item.label}</p>
        </Link>
      )}
    </li>
  );
};

const SidebarMenu = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" className="brand-link">
        <img src="/template/dist/img/logo.jpg" alt="Logo" className="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
        <span className="brand-text font-weight-light">ORA</span>
      </Link>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="/template/dist/img/user.png" className="img-circle elevation-2" alt="User" />
          </div>
          <div className="info">
            <Link to="#" className="d-block">Super Admin</Link>
          </div>
        </div>

        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                item={item}
                openMenu={openMenu}
                toggleMenu={(label) => setOpenMenu(openMenu === label ? null : label)}
                isActive={(path) => location.pathname === path}
              />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SidebarMenu;
