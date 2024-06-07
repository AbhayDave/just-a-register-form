import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";

const Select = ({ setData, data } = props) => {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    <div className="w-72 font-medium max-h-80">
      <div
        onClick={() => setOpen(!open)}
        className={`w-full p-2 flex items-center  justify-between rounded ${
          !selected && "text-blue-500 font-thin"
        } ${selected && " bg-blue-100 text-blue-900"}`}
      >
        <FaGlobe />
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Country"}

        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>

      <ul
        className={`bg-white mt-2 overflow-y-auto   ${
          open
            ? "max-h-60 border-2 rounded-md px-2 pt-1 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-w-2 scrollbar scrollbar-thumb-black scrollbar-track-gray-300 "
            : "max-h-0"
        } `}
      >
        <div className="flex items-center justify-between px-2 sticky top-0 bg-white border-2 rounded-md my-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
          <AiOutlineSearch size={18} className="text-blue-500 size-5 mr-2" />
        </div>
        {countries?.map((country) => (
          <li
            key={country?.name}
            className={`p-2 text-sm border-2 rounded-md mt-0.5 hover:bg-blue-300 hover:text-white
            ${
              country?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              country?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(country?.name);
                setOpen(false);
                setInputValue("");
                setData({ ...data, country: country.name });
              }
            }}
          >
            {country?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
