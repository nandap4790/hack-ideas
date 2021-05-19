import React from "react";

export const Challenge = () => {
  return <div className="modal-content-container">
    <div className="modal-content-header">
      Add a new challenge
    </div>
    <form>
      <label>
        Challenge Name:
            <input type="text" name="challenge-name" />
      </label>
      <label>
        Challenge Description:
            <input type="text" name="challenge-description" />
      </label>
      <label>
        Tags:
            <input type="text" name="challenge-tags" />
      </label>
      <input type="submit" value="Add" />
    </form>
  </div>
}