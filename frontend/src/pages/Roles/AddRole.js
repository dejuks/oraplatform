import { Link } from "react-router-dom";

function AddRole() {
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Add New Role</h3>
                <Link to="/roles" className="btn btn-secondary float-right">Back to Roles</Link>
            </div>
            <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Enter role name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" placeholder="Enter role description"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Role</button>
                </form>
            </div>
        </div>
    )
}
export default AddRole;