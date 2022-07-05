import "./index.css";
export const ErrorDisplayer = ({ error }) => {
  return (
    <div className="error-displayer">
      <h2>{error.name}</h2>
      <h3>{error.message}</h3>
      <button onClick={() => window.location.reload(false)}>
        Try to reload
      </button>
    </div>
  );
};
