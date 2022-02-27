import "bootstrap/dist/css/bootstrap.min.css";

const MyBlog = (props) => {
  const data = props.data;
  return (
    <>
      <div className="row d-flex flex-row gy-5 mx-auto margin-bttom">
        {data.map((data) => (
          <div key={data.id} className="col-6 ">
            <div className="card">
              <h5 className="card-header ">{data.name}</h5>
              <div className="card-body ">{data.surname}</div>
              <h5 className="card-title ">{data.age}</h5>
              <p className="card-text ">{data.job}</p>
              <button
                className="btn btn-primary delete-button"
                onClick={() => props.delete(data.id)}
              >
                DELETE BLOG
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default MyBlog;
