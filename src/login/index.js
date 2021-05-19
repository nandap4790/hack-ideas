import React from "react";

export const Login = () => {
  return <div className="modal-content-container">
    <div className="modal-content-header">
      Login to Add/Manage your challenges
        </div>
    <form>
      <label>
        Employee ID:
            <input type="text" name="employee-id" />
      </label>
      <input type="submit" value="Login" />
    </form>
  </div>
}