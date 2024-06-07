import React, { useState } from "react";
import InputBox from "../InputBox";
import { CiMail } from "react-icons/ci";
import RadioSelection from "../RadioSelection";
import CheckBox from "../CheckBox";
import Select from "../Select";

// import { FaRegUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { save } from "../../app/formSlice";
import Modal from "../Modal";

function Form({ setIsOpen, isOpen } = props) {
  const fData = useSelector((state) => state.form.formData); // Access form data
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    level: "",
    skills: [],
  });

  const handleSave = () => {
    // Access form data within the handler function
    console.log("Form data:", formData);
    console.log("Store Form data:", fData);

    // Dispatch the save action with updated data
    try {
      dispatch(
        save({
          ...formData,
        })
      );
      setIsOpen(true)
    } catch (error) {
      setIsOpen(false);
    }
  };

  const validateUsername = (value) => {
    if (value.length > 3 && value.length < 15) {
      setFormData({ ...formData, name: value });
      return null;
    } else {
      return "Enter a valid username";
    }
  };

  function validatePassword(password) {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const isLengthValid = password.length >= 8 && password.length <= 15;

    if (!hasUppercase) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!hasLowercase) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!hasDigit) {
      return "Password must contain at least one digit.";
    }
    if (!isLengthValid) {
      return "Password length should be between 8 and 15 characters.";
    }

    setFormData({ ...formData, password: password });
    // Password meets all conditions
    return null;
  }

  const validateEmail = (value) => {
    const email = String(value).trim(); // Remove leading/trailing spaces
    const isValid =
      email.includes("@") &&
      email.includes(".") &&
      email.lastIndexOf(".") < email.length - 2;
    if (isValid) {
      setFormData({ ...formData, email: value });
      return null;
    } else {
      return "Enter a valid email*";
    }
  };

  return (
    <>
      {isOpen && (
        <Modal className="fixed top-0 right-0" setIsOpen={setIsOpen} />
      )}
      <form className="w-1/4  shadow-lg bg-white border rounded-md min--h-0.5/3 flex flex-col items-center justify-center">
        <div className="text-center my-2 text-blue-600 text-3xl font-medium">
          FORM
        </div>
        {/* <div className="w-4/5 mt-5">
        <InputBox />
      </div> */}
        <div className="w-4/5 mt-3">
          <InputBox
            type="text"
            name="UserName"
            validCheck={validateUsername}
            errorMsg="Enter a valid name*"
            placeholder="@Enter your username"
            Logoo={CiMail}
          />
        </div>
        <div className="w-4/5 mt-3">
          <InputBox
            type="email"
            name="Email"
            validCheck={validateEmail}
            errorMsg="Enter a valid Email*"
            placeholder="@Enter your email"
          />
        </div>
        <div className="w-4/5 mt-3">
          <InputBox
            type="password"
            name="Password"
            validCheck={validatePassword}
            errorMsg="Password should contain at least 1 upper 1 lower case 1 letter"
            placeholder="**********"
          />
        </div>
        <div className="w-4/5 mt-3">
          <Select setData={setFormData} data={formData} />
        </div>
        <div className="w-4/5 py-1 -mt-0.5">
          <RadioSelection setData={setFormData} data={formData} />
        </div>
        <div className="w-4/5 py-1 -mt-0.5">
          <CheckBox setData={setFormData} data={formData} />
        </div>
        <div className="w-4/5 py-1">
          <button
            type="submit"
            className="border w-full py-2 mb-2 bg-blue-600 rounded-lg text-white text-xl font-bold"
            onClick={(e) => {
              e.preventDefault();
              handleSave();
            }}
          >
            SEND
          </button>
        </div>
      </form>
      <button
        className="absolute bottom-3 right-3 border p-2 mb-2 bg-blue-600 rounded-lg text-white text-xl font-bold"
        onClick={() => {
          console.log(fData);
        }}
      >
        SEND
      </button>
    </>
  );
}

export default Form;
