import React, { useState } from "react";
import { challengesList } from "../data/constants";

import "./home.css";

export const sortByUpvote = (challenges, sortState) => {
  const sortByDescending = [...challenges].sort((first, second) => second.upvotes - first.upvotes);
  return sortState === "descending" ? sortByDescending : challenges;
}

export const Home = () => {
  const [challenges, setChallenges] = useState(challengesList);
  const [sortState, setSortState] = useState("default");

  const challengesDom = () => {
    return challenges.map((challenge, index) => {
      return <div className="challenge challenge-1" key={index}>
        <h3 className="challenge-title">{challenge.title}</h3>
        <div className="description">
          {challenge.description}
        </div>
        <div className="tags">Tags: {challenge.tags}</div>
        <div className="upvotes">{challenge.upvotes}</div>
      </div>
    })
  }

  const sortWrapperFunction = () => {
    if (sortState === "default") {
      setChallenges(sortByUpvote(challenges, "descending"));
      setSortState("descending");
    } else {
      setChallenges(sortByUpvote(challengesList, "default"));
      setSortState("default");
    }
  }

  const sortClickText = sortState === "default" ? "Sort by Most Upvotes" : "Sort by Default";

  return <div className="home-container">
    <div className="challenges-header-block">
      <h2 className="challenges-header">Challenges</h2>
      <div className="sorter" onClick={() => sortWrapperFunction()}>{sortClickText}</div>
    </div>
    <div className="challenges-container">
      {challengesDom()}
    </div>
  </div >
}