import "./index.css";

import { clamp } from "../../helpers";
import { useEffect } from "react";

export const PageSelector = ({ callback, page, length, perPage = 18 }) => {
  const total = Math.ceil(length / perPage) || 1;
  useEffect(() => {
    if (+page > total - 1) {
      callback(total - 1);
    }
  }, [callback, page, total]);
  return (
    <nav className="page-selector">
      <button onClick={() => callback(0)}>First</button>
      <button onClick={() => callback(clamp(+page - 1, 0, total - 1))}>
        Previous
      </button>
      {+page + 1} of {total}
      <button onClick={() => callback(clamp(+page + 1, 0, total - 1))}>
        Next
      </button>
      <button onClick={() => callback(total - 1)}>Last</button>
    </nav>
  );
};
