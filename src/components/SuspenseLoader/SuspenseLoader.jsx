import "./SuspenseLoader.scss";

function SuspenseLoader() {
  return (
    <div className="suspense-loader">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default SuspenseLoader;
