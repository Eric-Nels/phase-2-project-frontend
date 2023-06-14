import React, { useEffect, useState } from "react";
import "../Styles/Teams.css";

function Teams({ teams, setTeams }) {
  const [selectedOrder, setSelectedOrder] = useState("");

  useEffect(() => {
    function sortTeams() {
      let sortedTeams;

      if (selectedOrder === "Alphabetical") {
        sortedTeams = [...teams].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (selectedOrder === "Standing") {
        sortedTeams = [...teams].sort((a, b) => b.standing - a.standing);
      } else {
        sortedTeams = teams;
      }

      setTeams(sortedTeams);
    }

    sortTeams();
  }, [teams, selectedOrder, setTeams]);

  function handleOrderChange(e) {
    setSelectedOrder(e.target.value);
  }

  return (
    <div className="teams-container">
      <h1>Teams</h1>
      <div>
        <select value={selectedOrder} onChange={handleOrderChange}>
          <option value="Alphabetical">Alphabetical</option>
          <option value="Standing">Standing</option>
        </select>
      </div>
      <div className="teams-grid">
        {teams.map((team) => (
          <div key={team.id} className="team-card">
            <h2>{team.name}</h2>
            <img src={team.image} alt={team.name} />
            <p>{team.standing}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;