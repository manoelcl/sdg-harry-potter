import { clamp } from "../../helpers";

export const PageSelector = ({ callback, page, length, perPage = 18 }) => {
  const total = Math.ceil(length / perPage);
  return (
    <div>
      <button onClick={() => callback(0)}>First</button>
      <button onClick={() => callback(clamp(page - 1, 0, total - 1))}>
        Previous
      </button>
      {page + 1} of {total}
      <button onClick={() => callback(clamp(page + 1, 0, total - 1))}>
        Next
      </button>
      <button onClick={() => callback(total - 1)}>Last</button>
    </div>
  );
};
