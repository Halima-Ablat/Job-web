function Option() {
  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <div
          className="card mx-3 bg-light border-0 shadow"
          style={{ width: "35rem" }}
        >
          <div className="card-body">
            <h5 className="card-title fw-bold">For Developer</h5>
            <p className="card-text">
              Browse our React jobs and start your career today
            </p>
            <a href="#" className="btn btn-dark px-2 fw-bold">
              Browse Jobs
            </a>
          </div>
        </div>
        <div
          className="card bg-color border-0 shadow"
          style={{ width: "35rem" }}
        >
          <div className="card-body">
            <h5 className="card-title fw-bold">For Employers</h5>
            <p className="card-text">
              List your job find the perfect developer for the role
            </p>
            <a href="#" className="btn btn-primary px-2 fw-bold">
              Add Job
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Option;
