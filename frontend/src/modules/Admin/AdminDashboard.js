import React, { useState } from 'react';
// import './AdminDashboard.css'; // We'll create this CSS file separately

const Dashboard = () => {
 

  const stats = [
    { value: '150', label: 'Journals', color: 'primary', icon: 'ion-bag' },
    { value: '300', label: 'eBooks', color: 'success', icon: 'ion-stats-bars' },
    { value: '44', label: 'Researchers', color: 'warning', icon: 'ion-person-add' },
    { value: '65', label: 'Publiched Books', color: 'danger', icon: 'ion-pie-graph' }
  ];

  return (
    <div className='card'>
      {/* Content Header */}
      <div>
        <div>
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Dashboard v1</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="content">
        <div className="container-fluid">
          {/* Stats Cards */}
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-6">
                <div className={`small-box bg-${stat.color}`}>
                  <div className="inner">
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </div>
                  <div className="icon">
                    <i className={`ion ${stat.icon}`}></i>
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Main Row */}
        
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
         <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{width: '10px'}}>#</th>
              <th>Task</th>
              <th>Progress</th>
              <th style={{width: '40px'}}>Label</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Update software</td>
              <td>
                <div className="progress progress-xs">
                  <div className="progress-bar bg-info" style={{width: '55%'}}></div>
                </div>
              </td>
              <td><span className="badge bg-primary">55%</span></td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Clean database</td>
              <td>
                <div className="progress progress-xs">
                  <div className="progress-bar bg-danger" style={{width: '70%'}}></div>
                </div>
              </td>
              <td><span className="badge bg-danger">70%</span></td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Cron job running</td>
              <td>
                <div className="progress progress-xs">
                  <div className="progress-bar bg-success" style={{width: '30%'}}></div>
                </div>
              </td>
              <td><span className="badge bg-success">30%</span></td>
            </tr>
            </tbody>
         </table>

            
        </div>
      </section>
    </div>
  );
};

export default Dashboard;