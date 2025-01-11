import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className=" flex flex-wrap mb-4 justify-end  ">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className=" flex flex-wrap mr-10 p-2  border rounded-full shadow-md text-white  bg-gradient-to-r from-orange-400    to-pink-600  font-bold py-2 px-4 cursor-pointer transition-all duration-200 hover:scale-105 animate-bounce"
      >
        <option className="bg-orange-300" value="All">
          All
        </option>
        <option className="bg-orange-400 " value="Completed">
          Completed
        </option>
        <option className="bg-orange-500" value="Not Completed">
          Not Completed
        </option>
      </select>
    </div>
  );
};

export default Filter;
