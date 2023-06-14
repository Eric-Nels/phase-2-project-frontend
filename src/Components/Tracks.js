import React, { useState } from "react";
import "../Styles/Tracks.css"

function Tracks({tracks, setTracks}) {
   
    return(
        <div className="tracks-page">
            <h1>Tracks</h1>
            <form className="NewTrack" onSubmit={handleSubmit}>
                <label> Track Location:
                    <input type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label> Image Url:
                    <input type="text"
                    name="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <label> Winner:
                    <input type="text"
                    name="winner"
                    value={winner}
                    onChange={(e) => setWinner(e.target.value)}
                    />
                </label>
                <button type="Submit">Submit</button>
            </form>
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