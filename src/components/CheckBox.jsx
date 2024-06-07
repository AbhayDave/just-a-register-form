import React, { useState } from "react";

const CheckBox = ({ setData, data } = props) => {
  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    let temp = [...skills];
    console.log(temp);
    if (temp.includes(e.target.value)) {
      temp = temp.filter((item) => item != e.target.value);
    } else {
      temp.push(e.target.value);
    }
    if(temp.length == 0){
      return;
    }else{
      console.log(temp);
      setSkills(temp);
      setData({...data, skills: temp});
    }
    
  };

  return (
    <div className="text-blue-500">
      <h1 className="">Skills</h1>
      <div className=" flex my-2 items-center gap-2 justify-evenly">
        <div className="has-[:checked]:bg-blue-100 has-[:checked]:text-blue-900 has-[:checked]:border-none px-2 py-3 border-2 rounded-md flex items-center gap-2 justify-around">
          <input
            className="checked:border-blue-500 h-4 w-4 accent-blue-900 border-4 border-red-500"
            type="checkbox"
            id="Java"
            name="skills"
            value="Java"
            onChange={handleChange}
          />
          <label className="font-thin" htmlFor="Java">
            Java
          </label>
        </div>

        <div className="has-[:checked]:bg-blue-100 has-[:checked]:text-blue-900 has-[:checked]:border-none px-2 py-3 border-2 rounded-md flex items-center gap-2 justify-around">
          <input
            className="checked:border-blue-500 h-4 w-4 accent-blue-900 border-4 border-red-500"
            type="checkbox"
            id="Python"
            name="skills"
            value="Python"
            onChange={handleChange}
          />
          <label className="font-thin" htmlFor="Python">
            Python
          </label>
        </div>

        <div className="has-[:checked]:bg-blue-100 has-[:checked]:text-blue-900 has-[:checked]:border-none px-2 py-3 border-2 rounded-md flex items-center gap-2 justify-around">
          <input
            className="checked:border-blue-500 h-4 w-4 accent-blue-900 border-4 border-red-500"
            type="checkbox"
            id="JavaScript"
            name="skills"
            value="JavaScript"
            onChange={handleChange}
          />
          <label className="font-thin" htmlFor="JavaScript">
            JavaScript
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckBox;
