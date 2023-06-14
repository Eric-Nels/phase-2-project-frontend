import React, { useState } from "react";
import "../Styles/Tracks.css"

function Tracks({tracks, setTracks}) {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [winner, setWinner] =useState('')

    function handleSubmit(e) {
        e.preventDefault();
        const trackData = {
            name: name,
            image: image,
            winner: winner
        };
        fetch('http://localhost:3000/tracks', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(trackData),
        })
            .then((r) => r.json())
            .then((newTrack) => onAddTrack(newTrack))
    }

    function onAddTrack(newTrack) {
        setTracks([...tracks, newTrack])
    }

    console.log(tracks)
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