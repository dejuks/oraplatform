import React from 'react';

const JournalDashboard = () => {

  // Journal Statistics
  const stats = [
    { value: '42', label: 'Total Journals', color: 'primary', icon: 'ion-compose' },
    { value: '120', label: 'Submitted Articles', color: 'success', icon: 'ion-document-text' },
    { value: '35', label: 'Under Review', color: 'warning', icon: 'ion-eye' },
    { value: '18', label: 'Published Articles', color: 'danger', icon: 'ion-checkmark' }
  ];

  return (
    <div className="card">

      {/* Header */}
      <div>
        <div>
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Journal Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Journal Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
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

        </div>
      </section>

      {/* Additional Section */}
      <section className="content">
        <div className="container-fluid">

          {/* Progress Table */}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th style={{ width: '10px' }}>#</th>
                <th>Task</th>
                <th>Progress</th>
                <th style={{ width: '40px' }}>Label</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>1.</td>
                <td>Article Review Process</td>
                <td>
                  <div className="progress progress-xs">
                    <div className="progress-bar bg-info" style={{ width: '45%' }}></div>
                  </div>
                </td>
                <td><span className="badge bg-info">45%</span></td>
              </tr>

              <tr>
                <td>2.</td>
                <td>Plagiarism Checking</td>
                <td>
                  <div className="progress progress-xs">
                    <div className="progress-bar bg-danger" style={{ width: '75%' }}></div>
                  </div>
                </td>
                <td><span className="badge bg-danger">75%</span></td>
              </tr>

              <tr>
                <td>3.</td>
                <td>Editorial Decision Pending</td>
                <td>
                  <div className="progress progress-xs">
                    <div className="progress-bar bg-warning" style={{ width: '60%' }}></div>
                  </div>
                </td>
                <td><span className="badge bg-warning">60%</span></td>
              </tr>

              <tr>
                <td>4.</td>
                <td>Publication Pipeline</td>
                <td>
                  <div className="progress progress-xs">
                    <div className="progress-bar bg-success" style={{ width: '30%' }}></div>
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

export default JournalDashboard;
