import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <div>
        <div>
          <h3>oh! page not found</h3>
          <p>we can't seem to find the page you are looking for</p>
          <Link to="/">back home</Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <h3>somethin went wrong</h3>
      </div>
    </div>
  );
};

export default Error;
