import { useEffect, useState } from "react";
import { api } from "../api/manuscriptApi";
import { useParams, useNavigate } from "react-router-dom";

export default function ManuscriptForm({ method }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    abstract: "",
    keywords: "",
    reference_list: "",
    cover_letter: "",
    manuscript_file: null,
    plagiarism_score: 0,
    author_id: "",
    journal_id: "",
    assigned_editor_id: "",
    status: "Submitted"
  });

  useEffect(() => {
    if (method === "edit") {
      api.get(`/${id}`).then((res) => {
        const m = res.data;
        setForm({
          ...m,
          keywords: m.keywords?.join(",")
        });
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));

    if (method === "create") await api.post("/", fd);
    else await api.put(`/${id}`, fd);

    navigate("/journal/list");
  };

  return (
    <div className="container mt-4">
      <h3>{method === "create" ? "Create Manuscript" : "Edit Manuscript"}</h3>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Title"
          value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />

        <textarea className="form-control mb-2" placeholder="Abstract"
          value={form.abstract} onChange={e => setForm({ ...form, abstract: e.target.value })}></textarea>

        <input className="form-control mb-2" placeholder="Keywords (comma separated)"
          value={form.keywords} onChange={e => setForm({ ...form, keywords: e.target.value })} />

        <input type="file" className="form-control mb-2"
          onChange={e => setForm({ ...form, manuscript_file: e.target.files[0] })} />

        <select className="form-control mb-2"
          value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
          <option>Submitted</option>
          <option>Under Review</option>
          <option>Revision Requested</option>
          <option>Revision Submitted</option>
          <option>Accepted</option>
          <option>Published</option>
          <option>Desk Reject</option>
        </select>

        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
}
