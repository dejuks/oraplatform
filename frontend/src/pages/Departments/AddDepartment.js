import { Link } from "react-router-dom";

function AddDepartment() {
  return (
    <div className="card">
        <div className="card-header">
          <h3 className="card-title">Add New Department</h3>
          <Link to="/departments" className="btn btn-secondary float-right">Back to Departments</Link>
        </div>
            <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Enter department name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" placeholder="Enter department description"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Department</button>
                </form>
            </div>

    </div>
  )
}
export default AddDepartment;