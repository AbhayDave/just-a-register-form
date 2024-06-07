import React, { useState } from "react";

const RadioSelection = ({ setData, data } = props) => {
  const [level, setLevel] = useState("");

  const handleChange = (e) => {
    setLevel(e.target.value);
    if (
      e.target.value === "Basic" ||
      e.target.value === "Medium" ||
      e.target.value === "Advanced"
    ) {
      setData({ ...data, level: e.target.value });
    }
  };

  return (
    <div className="text-blue-500">
      <h1>Level of development</h1>
      <div className=" flex my-2 items-center gap-2 justify-evenly">
        <div className="has-[:checked]:bg-blue-100 has-[:checked]:text-blue-900 has-[:checked]:border-none px-2 py-3 border-2 rounded-md flex items-center gap-2 justify-around">
          <input
            className="checked:border-blue-500 h-4 w-4 accent-blue-900 border-4 border-red-500"
            type="radio"
            id="Basic"
            name="level"
            value="Basic"
            onChange={handleChange}
          />
          <label className="font-thin" htmlFor="Basic">
            Basic
          </label>
        </div>

        <div className="has-[:checked]:bg-blue-100 has-[:checked]:text-blue-900 has-[:checked]:border-none px-2 py-3 border-2 rounded-md flex items-center gap-2 justify-around">
          <input
            className="checked:border-blue-500 h-4 w-4 accent-blue-900 border-4 border-red-500"
            type="radio"
            id="Medium"
            name="level"
            value="Medium"
            onChange={handleChange}
          />
          <label className="font-thin" htmlFor="Medium">
            Medium
          </label>
        </div>

        <div className="has-[:checked]:bg-blue-100 has-[:checked]:text-blue-900 has-[:checked]:border-none px-2 py-3 border-2 rounded-md flex items-center gap-2 justify-around">
          <input
            className="checked:border-blue-500 h-4 w-4 accent-blue-900 border-4 border-red-500"
            type="radio"
            id="Advanced"
            name="level"
            value="Advanced"
            onChange={handleChange}
          />
          <label className="font-thin" htmlFor="Advanced">
            Advanced
          </label>
        </div>
      </div>
    </div>
  );
};

export default RadioSelection;
