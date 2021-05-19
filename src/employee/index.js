import React, { useState } from "react";
import { Challenge } from "../challenge";
import { challengesList } from "../data/constants";
import { ModalContainer } from "../modal";

export const Employee = () => {
  const [toggleChallenegeModal, setToggleChallenegeModal] = useState(false);

  const triggerChallengeModal = () => setToggleChallenegeModal(!toggleChallenegeModal);

  const challengesDom = () => {
    return challengesList.map((challenge, index) => {
      return <div className="challenge challenge-1" key={index}>
        <h3 className="challenge-title">{challenge.title}</h3>
        <div className="description">
          {challenge.description}
        </div>
        <div className="tags">Tags: {challenge.tags}</div>
        <div className="upvotes">{challenge.upvotes}</div>
        <button className="edit-button">Edit Challenge</button>
        <button className="delete-button">Delete Challenge</button>
      </div>
    })
  }

  return <div className="employee-page-container">
    <button className="add-button" onClick={() => triggerChallengeModal()}>Add Challenge</button>
    <div className="my-challenges">
      {challengesDom()}
    </div>
    <ModalContainer toggleModal={toggleChallenegeModal}>
      <Challenge />
    </ModalContainer>
  </div>
}