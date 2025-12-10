// frontend/src/modules/Library/components/AuthorForm.js 
import { useEffect, useState } from "react";
import { authorApi } from "../api/authorApi";
import { useParams, useNavigate } from "react-router-dom";

const COUNTRIES = [
  "Ethiopia", "American", "British", "Canadian", "French", "German",
  "Japanese", "Chinese", "Indian", "Australian", "Spanish",
  "Italian", "Russian", "Brazilian", "Mexican", "Other"
];

export default function AuthorForm({ method }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    biography: "",
    nationality: "",
    date_of_birth: "",
    website: "",
    email: "",
    phone: "",
    affiliation: "",
    profile_picture: null,
    social_links: "",
    status: "active"
  });

  const isCreate = method === "create";
  const isEdit = method === "edit";

  useEffect(() => {
    if (isEdit) {
      setLoading(true);
      authorApi.get(`/${id}`)
        .then(res => {
          const data = res.data;
          setForm({
            ...data,
            social_links: data.social_links ? data.social_links.join(",") : "",
            profile_picture: null
          });
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setErrors({ general: "Failed to load author details." });
          setLoading(false);
        });
    }
  }, [id, isEdit]);

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (files) {
      setForm(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => {
        if (k === "social_links") fd.append(k, JSON.stringify(v.split(",").map(s => s.trim())));
        else fd.append(k, v);
      });

      if (isCreate) await authorApi.post("/", fd);
      else await authorApi.put(`/${id}`, fd);

      navigate("/library/authors");
    } catch (error) {
      console.error("Error saving author:", error);

      if (error.response && error.response.data) {
        setErrors(error.response.data.errors || { general: error.response.data.error });
      } else {
        setErrors({ general: "An unexpected error occurred." });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    if (isCreate) {
      setForm({
        first_name: "",
        last_name: "",
        biography: "",
        nationality: "",
        date_of_birth: "",
        website: "",
        email: "",
        phone: "",
        affiliation: "",
        profile_picture: null,
        social_links: "",
        status: "active"
      });
      setErrors({});
    }
  };

  return (
    <div className="content-header">
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">

              {/* Display general errors */}
              {errors.general && (
                <div className="alert alert-danger">{errors.general}</div>
              )}

              {loading && isEdit ? (
                <div className="card">
                  <div className="card-body text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                    <p className="mt-3">Loading author details...</p>
                  </div>
                </div>
              ) : (
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h3 className="card-title">
                      <i className="fas fa-user-edit mr-2"></i>
                      Author Information
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="card-body">

                      {/* First & Last Name */}
                      <div className="row">
                        <div className="col-md-6">
                          <input type="text" className={`form-control mb-2 ${errors.first_name ? "is-invalid" : ""}`} placeholder="First Name *" name="first_name"
                            value={form.first_name} onChange={handleChange} required disabled={loading} />
                          {errors.first_name && <div className="invalid-feedback">{errors.first_name}</div>}
                        </div>
                        <div className="col-md-6">
                          <input type="text" className={`form-control mb-2 ${errors.last_name ? "is-invalid" : ""}`} placeholder="Last Name *" name="last_name"
                            value={form.last_name} onChange={handleChange} required disabled={loading} />
                          {errors.last_name && <div className="invalid-feedback">{errors.last_name}</div>}
                        </div>
                      </div>

                      {/* Nationality & DOB */}
                      <div className="row">
                        <div className="col-md-6">
                          <select className={`form-control mb-2 ${errors.nationality ? "is-invalid" : ""}`} name="nationality" value={form.nationality} onChange={handleChange} disabled={loading}>
                            <option value="">Select Nationality</option>
                            {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                          {errors.nationality && <div className="invalid-feedback">{errors.nationality}</div>}
                        </div>
                        <div className="col-md-6">
                          <input type="date" className={`form-control mb-2 ${errors.date_of_birth ? "is-invalid" : ""}`} name="date_of_birth" value={form.date_of_birth || ""} onChange={handleChange} disabled={loading} />
                          {errors.date_of_birth && <div className="invalid-feedback">{errors.date_of_birth}</div>}
                        </div>
                      </div>

                      {/* Website, Email, Phone */}
                      <input type="url" className={`form-control mb-2 ${errors.website ? "is-invalid" : ""}`} placeholder="Website" name="website" value={form.website} onChange={handleChange} disabled={loading} />
                      {errors.website && <div className="invalid-feedback">{errors.website}</div>}

                      <input type="email" className={`form-control mb-2 ${errors.email ? "is-invalid" : ""}`} placeholder="Email" name="email" value={form.email} onChange={handleChange} disabled={loading} />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}

                      <input type="text" className={`form-control mb-2 ${errors.phone ? "is-invalid" : ""}`} placeholder="Phone" name="phone" value={form.phone} onChange={handleChange} disabled={loading} />
                      {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}

                      {/* Affiliation */}
                      <input type="text" className={`form-control mb-2 ${errors.affiliation ? "is-invalid" : ""}`} placeholder="Affiliation" name="affiliation" value={form.affiliation} onChange={handleChange} disabled={loading} />
                      {errors.affiliation && <div className="invalid-feedback">{errors.affiliation}</div>}

                      {/* Profile Picture */}
                      <div className="form-group mb-2">
                        <label>Profile Picture</label>
                        <input type="file" className={`form-control-file ${errors.profile_picture ? "is-invalid" : ""}`} name="profile_picture" onChange={handleChange} disabled={loading} />
                        {errors.profile_picture && <div className="invalid-feedback">{errors.profile_picture}</div>}
                      </div>

                      {/* Social Links */}
                      <input type="text" className={`form-control mb-2 ${errors.social_links ? "is-invalid" : ""}`} placeholder="Social Links (comma separated)" name="social_links" value={form.social_links} onChange={handleChange} disabled={loading} />
                      {errors.social_links && <div className="invalid-feedback">{errors.social_links}</div>}

                      {/* Status */}
                      <select className={`form-control mb-2 ${errors.status ? "is-invalid" : ""}`} name="status" value={form.status} onChange={handleChange} disabled={loading}>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                      {errors.status && <div className="invalid-feedback">{errors.status}</div>}

                      {/* Biography */}
                      <textarea className={`form-control mb-2 ${errors.biography ? "is-invalid" : ""}`} rows={5} placeholder="Biography" name="biography" value={form.biography} onChange={handleChange} disabled={loading}></textarea>
                      {errors.biography && <div className="invalid-feedback">{errors.biography}</div>}

                    </div>

                    {/* Footer Buttons */}
                    <div className="card-footer">
                      <div className="row">
                        <div className="col-md-4 mb-2">
                          <button type="button" className="btn btn-secondary btn-block" onClick={() => navigate("/library/author")} disabled={loading}>
                            Cancel
                          </button>
                        </div>
                        <div className="col-md-4 mb-2">
                          <button type="button" className="btn btn-warning btn-block" onClick={handleReset} disabled={loading || isEdit}>
                            Reset
                          </button>
                        </div>
                        <div className="col-md-4">
                          <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                            {loading ? "Saving..." : "Save Author"}
                          </button>
                        </div>
                      </div>
                    </div>

                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
