import React, { useState } from "react";
import "../Styles/Tracks.css"

function Tracks({tracks, setTracks}) {
   
    return(
        <div className="tracks-page">
            <h1>Tracks</h1>
        
            <div className="tracks-container">
            {tracks.map((track)=> {
            return(
                <div className="track-card" key={track.id}>
                    <h2>{track.name}</h2>
                    <img src={track.image} />
                    <p>{track.winner}</p>
                </div>
            )
        })}
            </div>
        </div>
    )
};


export default Tracks;