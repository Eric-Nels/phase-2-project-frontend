import React, { useEffect, useState } from "react";
import "../Styles/Teams.css";

function Teams({ teams, setTeams }) {

    const [selectedOrder, setSelectedOrder] = useState("");
  
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