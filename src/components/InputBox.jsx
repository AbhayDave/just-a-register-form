import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";

import { IoIosCloseCircle } from "react-icons/io";
import { FaCircleArrowRight } from "react-icons/fa6";
const InputBox = ({ type, name, validCheck, errorMsg, placeholder, Logoo }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  // const handleChange = (e) => {
  //   const isValid = validCheck(e.target.value);

  //   if (isValid) {
  //     setError(isValid);
  //   } else {
  //     setError(null);
  //   }
  //   setValue(e.target.value);
  // };

  const handleChange = (e) => {
    const val = e.target.value;
    const isValid = validCheck(val);

    setError(isValid); // Set the error state
    setValue(val); // Update the value state
  };

  return (
    <>
      <div className="relative group py-5 flex items-center border rounded-sm  border-gray-300 text-blue-600">
        <FaRegUser
          className={
            error
              ? "absolute z-10 w-4 h-4 ml-3 pointer-events-none text-red-500"
              : value
              ? "absolute z-10 w-4 h-4 ml-3 pointer-events-none text-green-500"
              : "absolute z-10 w-4 h-4 ml-3 pointer-events-none"
          }
        />

       

        <input
          type={type}
          name={name.toLowerCase()}
          className={
            !error
              ? value
                ? "absolute pl-10 py-2 pr-3 w-full h-full focus:bg-white outline-green-600 placeholder-shown:opacity-0 group-focus-within:placeholder-shown:opacity-70"
                : "absolute pl-10 py-2 pr-3 w-full h-full focus:bg-white focus:outline-blue-600 placeholder-shown:opacity-0 group-focus-within:placeholder-shown:opacity-70"
              : "absolute pl-10 py-2 pr-3 w-full h-full focus:bg-white placeholder-shown:opacity-0 group-focus-within:placeholder-shown:opacity-70 text-red-500 outline-red-600"
          }
          placeholder={placeholder}
          onChange={handleChange}
          autoCorrect="false"
          value={value}
        />

        <label
          htmlFor={name.toLowerCase()}
          className={
            value
              ? error
                ? "absolute pl-1 pr-1 left-10 pointer-events-none -top-2 text-xs font-bold bg-white text-red-500"
                : "absolute pl-1 pr-1 left-10 pointer-events-none -top-2 text-xs text-bold bg-white text-green-500"
              : "absolute pl-1 pr-1 left-10 pointer-events-none font-thin group-focus-within:-top-2 group-focus-within:text-xs group-focus-within:font-bold group-focus-within:bg-white"
          }
        >
          {name}
        </label>

        {error ? (
          <IoIosCloseCircle className="absolute right-5 z-10 w-5 h-5 text-red-500 pointer-events-none" />
        ) : (
          <div />
        )}

        {value.length > 3 && !error ? (
          <FaCircleArrowRight className="absolute right-5 z-10 w-4 h-4 text-green-500  pointer-events-none" />
        ) : (
          <div />
        )}
      </div>
      {error ? (
        <div className=" text-xs mt-1 text-red-600">{error}</div>
      ) : (
        <div />
      )}
    </>
  );
};
export default InputBox;
