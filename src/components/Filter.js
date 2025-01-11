import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="mb-4">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
    </div>
  );
};

export default Filter;
