// modules/library/pages/AuthorList.js
import { useEffect, useState } from "react";
import { authorApi } from "../api/authorApi";
import { useNavigate } from "react-router-dom";

export default function AuthorList() {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    authorApi.get("/").then((res) => setAuthors(res.data));
  }, []);

  const deleteAuthor = async (id) => {
    if (!window.confirm("Remove this author?")) return;

    await authorApi.delete(`/${id}`);
    setAuthors(authors.filter((a) => a.author_id !== id));
  };

  return (
    <div className="content-header">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Authors</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item"><a href="/library">Library</a></li>
                <li className="breadcrumb-item active">Authors</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Author List</h3>
                  <div className="card-tools">
                    <button 
                      className="btn btn-primary btn-sm" 
                      onClick={() => navigate("/library/author/create")}
                    >
                      <i className="fas fa-plus mr-1"></i> Add Author
                    </button>
                  </div>
                </div>
                
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover table-striped">
                      <thead>
                        <tr>
                          <th style={{width: '50px'}}>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Nationality</th>
                          <th>Date of Birth</th>
                          <th>Website</th>
                          <th style={{width: '200px'}}>Actions</th>
                        </tr>
                      </thead>

                      <tbody>
                        {authors.length ? (
                          authors.map((a, i) => (
                            <tr key={a.author_id}>
                              <td>{i + 1}</td>
                              <td>{a.first_name}</td>
                              <td>{a.last_name}</td>
                              <td>
                                <span className={`badge ${a.nationality ? 'badge-info' : 'badge-secondary'}`}>
                                  {a.nationality || "-"}
                                </span>
                              </td>
                              <td>{a.date_of_birth || "-"}</td>
                              <td>
                                {a.website ? (
                                  <a href={a.website} target="_blank" rel="noreferrer" className="text-primary">
                                    <i className="fas fa-external-link-alt mr-1"></i> Visit
                                  </a>
                                ) : (
                                  <span className="text-muted">-</span>
                                )}
                              </td>
                              <td>
                                <div className="btn-group">
                                  <button
                                    className="btn btn-info btn-sm"
                                    onClick={() => navigate(`/library/author/edit/${a.author_id}`)}
                                    title="Edit"
                                  >
                                    <i className="fas fa-edit"></i>
                                  </button>

                                  <button
                                    className="btn btn-secondary btn-sm"
                                    onClick={() => navigate(`/library/author/${a.author_id}`)}
                                    title="View Details"
                                  >
                                    <i className="fas fa-eye"></i>
                                  </button>

                                  <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteAuthor(a.author_id)}
                                    title="Delete"
                                  >
                                    <i className="fas fa-trash"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={7}>
                              <div className="text-center py-5">
                                <i className="fas fa-users fa-3x text-muted mb-3"></i>
                                <h4 className="text-muted">No authors found</h4>
                                <p className="text-muted">Start by adding your first author</p>
                                <button 
                                  className="btn btn-primary mt-2"
                                  onClick={() => navigate("/library/author/create")}
                                >
                                  <i className="fas fa-plus mr-2"></i> Add Author
                                </button>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {authors.length > 0 && (
                  <div className="card-footer clearfix">
                    <div className="float-left">
                      <span className="text-muted">
                        Showing <strong>{authors.length}</strong> authors
                      </span>
                    </div>
                    <div className="float-right">
                      <ul className="pagination pagination-sm m-0">
                        <li className="page-item"><a className="page-link" href="#">«</a></li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">»</a></li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
