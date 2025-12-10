// modules/library/pages/AuthorDetail.js
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { authorApi } from "../api/authorApi";

export default function AuthorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authorApi.get(`/${id}`)
      .then(res => {
        const data = res.data;
        setAuthor({
          ...data,
          social_links: data.social_links ? data.social_links.join(", ") : "",
        });
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching author:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-3">Loading author details...</p>
      </div>
    );
  }

  if (!author) {
    return (
      <div className="alert alert-danger text-center">
        Author not found.
      </div>
    );
  }

  return (
    <div className="content-header">
      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fas fa-user mr-2"></i> Author Details
              </h3>
            </div>
            <div className="card-body">
              <div className="row">
                {/* Profile Picture */}
                {author.profile_picture && (
                  <div className="col-md-3 text-center mb-3">
                    <img
                      src={author.profile_picture}
                      alt={`${author.first_name} ${author.last_name}`}
                      className="img-fluid img-thumbnail"
                    />
                  </div>
                )}

                {/* Details */}
                <div className={author.profile_picture ? "col-md-9" : "col-md-12"}>
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <th>First Name</th>
                        <td>{author.first_name}</td>
                      </tr>
                      <tr>
                        <th>Last Name</th>
                        <td>{author.last_name}</td>
                      </tr>
                      <tr>
                        <th>Biography</th>
                        <td>{author.biography || "-"}</td>
                      </tr>
                      <tr>
                        <th>Nationality</th>
                        <td>{author.nationality || "-"}</td>
                      </tr>
                      <tr>
                        <th>Date of Birth</th>
                        <td>{author.date_of_birth || "-"}</td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                          {author.website ? (
                            <a href={author.website} target="_blank" rel="noopener noreferrer">
                              {author.website}
                            </a>
                          ) : "-"}
                        </td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>{author.email || "-"}</td>
                      </tr>
                      <tr>
                        <th>Phone</th>
                        <td>{author.phone || "-"}</td>
                      </tr>
                      <tr>
                        <th>Affiliation</th>
                        <td>{author.affiliation || "-"}</td>
                      </tr>
                      <tr>
                        <th>Social Links</th>
                        <td>
                          {author.social_links ? author.social_links.split(",").map((link, idx) => (
                            <div key={idx}>
                              <a href={link.trim()} target="_blank" rel="noopener noreferrer">{link.trim()}</a>
                            </div>
                          )) : "-"}
                        </td>
                      </tr>
                      <tr>
                        <th>Status</th>
                        <td>
                          {author.status === "active" ? (
                            <span className="badge badge-success">Active</span>
                          ) : (
                            <span className="badge badge-secondary">Inactive</span>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="mt-3">
                    <button className="btn btn-secondary" onClick={() => navigate("/library/authors")}>
                      <i className="fas fa-arrow-left mr-1"></i> Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
