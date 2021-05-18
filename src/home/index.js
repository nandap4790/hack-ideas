import React, { useEffect, useState } from "react";

import "./home.css";

export const sortByUpvote = (challenges, sortState) => {
  const sortByDescending = [...challenges].sort((first, second) => second.upvotes - first.upvotes);
  return sortState === "descending" ? sortByDescending : challenges;
}

export const Home = () => {
  const challengesList = [
    {
      id: 1,
      title: "The Java developers League",
      description: "This is the description of challenge 1 with tags as Java and Retail.",
      tags: "Java, Retail",
      upvotes: 5
    },
    {
      id: 2,
      title: "The ReactJs developers League",
      description: "This is the description of challenge 1 with tags as ReactJs and Retail.",
      tags: "Java, Retail",
      upvotes: 4
    },
    {
      id: 3,
      title: "The Javascript developers League",
      description: "This is the description of challenge 1 with tags as Javascript and Retail.",
      tags: "Java, Retail",
      upvotes: 1
    },
    {
      id: 4,
      title: "The RoR developers League",
      description: "This is the description of challenge 1 with tags as RoR and Retail.",
      tags: "Java, Retail",
      upvotes: 51
    },
    {
      id: 5,
      title: "The Azure developers League",
      description: "This is the description of challenge 1 with tags as Azure and Retail.",
      tags: "Java, Retail",
      upvotes: 2
    },
  ];

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