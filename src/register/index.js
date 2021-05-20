import React, { useState } from "react";
import firebaseContext from "../firebase-context";

export const Register = () => {
  const [employee, setEmployee] = useState({})

  const registerEmployee = (e) => {
    e.preventDefault();
    firebaseContext.collection("employees").add({
      name: employee.name,
      "employee-id": employee["employee-id"]
    })
  }

  const handleChange = (e) => {
    const newEmployee = { ...employee };
    newEmployee[e.target.name] = e.target.value;

    setEmployee(newEmployee);
  }

  return <div className="modal-content-container">
    <div className="modal-content-header">
      Register to Add/Manage your challenges
        </div>
    <form onSubmit={(e) => registerEmployee(e)}>
      <label>
        Employee Name:
            <input type="text" name="name" onChange={(e) => handleChange(e)} />
      </label>
      <label>
        Employee ID:
            <input type="text" name="employee-id" onChange={(e) => handleChange(e)} />
      </label>
      <input type="submit" value="Register" />
    </form>
  </div>
}