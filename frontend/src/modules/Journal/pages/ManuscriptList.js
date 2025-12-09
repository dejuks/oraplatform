import { useEffect, useState } from "react";
import { api } from "../api/manuscriptApi";

export default function ManuscriptList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get("/").then(res => setList(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Manuscripts</h2>

      <a className="btn btn-primary mb-3" href="/journal/create">
        + New Manuscript
      </a>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th><th>Title</th><th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map(m => (
            <tr key={m.submission_id}>
              <td>{m.submission_id}</td>
              <td>{m.title}</td>
              <td>{m.status}</td>
              <td>
                <a className="btn btn-info btn-sm" href={`/journal/edit/${m.submission_id}`}>
                  Edit
                </a>
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => api.delete(`/${m.submission_id}`).then(() => window.location.reload())}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
