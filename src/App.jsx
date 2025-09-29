import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

import { useState } from "react";

const defaultValue = {
  name: "",
  email: "",
  password: "",
  gender: "",
  termsAccepted: false,
};

function Ayyan() {
  const [inputs, setInputs] = useState(defaultValue);

  function handleChange(e) {
    const { name, checked, value, type } = e.target;
    setInputs((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", inputs);

    if (!inputs.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }

    setInputs(defaultValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">User Registration</h2>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="Enter Name"
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder="Enter Email"
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          placeholder="Enter Password"
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Gender */}
      <div>
        <p className="text-sm font-medium mb-1">Gender</p>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={inputs.gender === "male"}
              onChange={handleChange}
              required
            />
            Male
          </label>

          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={inputs.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>

          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="gender"
              value="other"
              checked={inputs.gender === "other"}
              onChange={handleChange}
            />
            Other
          </label>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-center">
        <input
          type="checkbox"
          name="termsAccepted"
          checked={inputs.termsAccepted}
          onChange={handleChange}
          className="mr-2"
        />
        <label className="text-sm">I accept the terms and conditions</label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Register
      </button>
    </form>
  );
}

export default Ayyan;
