import jobs from "../Brower.json";
function JobListing() {
  console.log(jobs);
  return (
    <>
      <section className="bg-light px-4 py-10 mt-3">
        <div className="container">
          <h2 className="display-5 text-primary mb-6 text-center fw-bold py-3">
            Browse Jobs
          </h2>
          <div className="row">
            {jobs.map((job) => {
              return (
                <div className="col-12 col-md-4 mb-4">
                  <div className="card h-100 p-3 shadow-sm">
                    <div className="card-body">
                      <div className="card-subtitle mb-2 text-muted">
                        {job.type}
                      </div>
                      <h3 className="card-title fw-bold">{job.title}</h3>
                    </div>

                    <div className="card-text">{job.description}</div>

                    <h3 className="text-info fs-5 mt-3">{job.salary} / Year</h3>

                    <div className="border-bottom mb-3"></div>

                    <div className="d-flex justify-content-between">
                      <div className="text-warning">📌 {job.location}</div>
                      <a
                        href={`/job/${job.id}`}
                        className="btn btn-primary fw-bold"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
export default JobListing;
