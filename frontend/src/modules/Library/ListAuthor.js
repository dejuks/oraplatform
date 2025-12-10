function ListAuthor() {
  return (
    <div className="content-header">
      {/* Page Header */}
      <section className="content-header">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <h1>List of Authors</h1>

          {/* Create Button */}
          <button className="btn btn-primary">
            <i className="fas fa-plus"></i> Add New Author
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Author List</h3>
          </div>

          <div className="card-body">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th style={{ width: "50px" }}>#</th>
                  <th>Name</th>
                  <th>Country</th>
                  <th style={{ width: "150px" }}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {/* Empty table message */}
                <tr>
                  <td colSpan="4" className="text-center text-muted">
                    No authors available.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>
    </div>
  );
}

export default ListAuthor;
