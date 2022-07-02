export const PageSelector = ({ callback, page, length, perPage = 20 }) => {
  const total = Math.ceil(length / perPage);
  return (
    <div>
      <button onClick={() => callback(0)}>First</button>
      <button onClick={() => callback(page - 1)}>Previous</button>
      {page + 1} of {total}
      <button onClick={() => callback(page + 1)}>Next</button>
      <button onClick={() => callback(total - 1)}>Last</button>
    </div>
  );
};
