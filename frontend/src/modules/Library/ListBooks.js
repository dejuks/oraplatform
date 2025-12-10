function ListBooks() {
  return (
    <div className="content-header">
      {/* Page Header */}
      <section className="content-header">
        <div className="container-fluid">
          <h1>Library Books</h1>
        </div>
      </section>

      {/* Main content */}
      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Book List</h3>
          </div>

          <div className="card-body">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th style={{ width: "50px" }}>#</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Year</th>
                  <th style={{ width: "120px" }}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {/* Empty table (no data yet) */}
                <tr>
                  <td colSpan="5" className="text-center text-muted">
                    No books available.
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

export default ListBooks;
