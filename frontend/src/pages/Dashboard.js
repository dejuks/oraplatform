import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import Layout from "../components/Layout";

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const Dashboard = () => {
  // SAMPLE DATA — You can replace with API results later
  const moduleCounts = {
    journal: 12,
    ebook: 35,
    library: 8400,
    wikipedia: 420,
    repository: 610,
    research: 1450,
  };

  const totalRoles = 40;

  // BAR CHART DATA
  const barData = {
    labels: ["Journal", "eBook", "Library", "Wikipedia", "Repository", "Research Network"],
    datasets: [
      {
        label: "Active Resources / Items",
        data: Object.values(moduleCounts),
      },
    ],
  };

  // PIE CHART DATA
  const pieData = {
    labels: ["Journal", "eBook", "Library", "Wikipedia", "Repository", "Research Network"],
    datasets: [
      {
        data: Object.values(moduleCounts),
      },
    ],
  };

  return (
    <Layout>
      <section className="content-header mb-3">
        <h3>ORA Unified Platform Dashboard</h3>
        <p className="text-muted">Welcome back, Super Admin!</p>
      </section>

      {/* STATISTICS CARDS */}
      <div className="row">
        <DashboardCard title="Journal System" count={moduleCounts.journal} icon="fas fa-book" color="bg-info" />
        <DashboardCard title="eBook Publishing" count={moduleCounts.ebook} icon="fas fa-file-pdf" color="bg-success" />
        <DashboardCard title="ORA Library" count={moduleCounts.library} icon="fas fa-university" color="bg-warning" />
        <DashboardCard title="Oromo Wikipedia" count={moduleCounts.wikipedia} icon="fab fa-wikipedia-w" color="bg-danger" />
        <DashboardCard title="Repository System" count={moduleCounts.repository} icon="fas fa-database" color="bg-primary" />
        <DashboardCard title="Researchers Network" count={moduleCounts.research} icon="fas fa-users" color="bg-secondary" />
      </div>

      {/* ROLES MESSAGE */}
      <div className="alert alert-primary mt-3">
        <strong>Platform Roles:</strong> Total <b>{totalRoles}</b> distinct roles defined across all modules.
      </div>

      {/* CHARTS */}
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card card-outline card-success p-2">
            <div className="card-header"><h5 className="card-title">Module Resource Overview</h5></div>
            <Bar data={barData} />
          </div>
        </div>

        <div className="col-md-6">
          <div className="card card-outline card-warning p-2">
            <div className="card-header"><h5 className="card-title">Module Distribution</h5></div>
            <Pie data={pieData} />
          </div>
        </div>
      </div>

      {/* FOOTER MESSAGE */}
      <div className="alert alert-success mt-4">
        ORA Integrated Knowledge Platform is running smoothly. All systems operational!
      </div>
    </Layout>
  );
};

const DashboardCard = ({ title, count, icon, color }) => (
  <div className="col-lg-4 col-md-6 col-12">
    <div className={`small-box ${color}`}>
      <div className="inner">
        <h3>{count}</h3>
        <p>{title}</p>
      </div>
      <div className="icon">
        <i className={icon}></i>
      </div>
      <a href="#" className="small-box-footer">
        View Details <i className="fas fa-arrow-circle-right"></i>
      </a>
    </div>
  </div>
);

export default Dashboard;
