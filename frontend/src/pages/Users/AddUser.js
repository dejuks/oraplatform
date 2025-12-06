import React, { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    phone_number: "",
    gender: "",
    job_title: "",
    organization: "",
    department_id: "",
    profile_photo: "",
    status: "active",
    is_superuser: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("users", formData);
      alert("User created successfully!");
      navigate("/admin/users");
    } catch (err) {
      console.error(err);
      alert("Error creating user");
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Add New User</h3>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="full_name"
                className="form-control"
                value={formData.full_name}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                name="phone_number"
                className="form-control"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Gender</label>
              <select
                name="gender"
                className="form-control"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Job Title</label>
              <input
                type="text"
                name="job_title"
                className="form-control"
                value={formData.job_title}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Organization</label>
              <input
                type="text"
                name="organization"
                className="form-control"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Department ID</label>
              <input
                type="number"
                name="department_id"
                className="form-control"
                value={formData.department_id}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Profile Photo (URL)</label>
              <input
                type="text"
                name="profile_photo"
                className="form-control"
                value={formData.profile_photo}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Status</label>
              <select
                name="status"
                className="form-control"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="active">Active</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>

            <div className="col-md-6 mb-3 d-flex align-items-center gap-2">
              <label className="form-label m-0">Superuser</label>
              <input
                type="checkbox"
                name="is_superuser"
                checked={formData.is_superuser}
                onChange={handleChange}
              />
            </div>

          </div>

          <button type="submit" className="btn btn-primary mt-2">
            Add User
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddUser;
