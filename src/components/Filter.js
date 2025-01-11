import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className=" flex flex-wrap mb-4 justify-end bg-transparent">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className=" flex flex-wrap mr-10 p-2  border rounded-full shadow-md text-white  bg-gradient-to-r from-orange-400    to-pink-600  font-bold py-2 px-4 hover: "
      >
        <option className="bg-orange-500 bg-transparent" value="All">
          All
        </option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
    </div>
  );
};

export default Filter;
