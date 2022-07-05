import "./index.css";

export const Button = ({ callback, className, children }) => {
  return (
    <button
      onClick={callback}
      className={className ? className + ` button` : ""}
    >
      <div className="box">{children}</div>
    </button>
  );
};
