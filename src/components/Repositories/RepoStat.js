import React from "react";

const RepoStat = ({ icon, text }) => (
  <div className="repo-stat">
    <span className="icon">{icon}</span>
    <span>{text}</span>
  </div>
);

export default RepoStat;
