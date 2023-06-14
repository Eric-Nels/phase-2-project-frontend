import React from "react";
import '../Styles/Home.css'

function Home() {
    return(
        <div className="home-container">
            <h1>Welcome to the 2023 F1 Season Tracker</h1>
            <p>Stay updated with the latest information about the Formula 1 season.</p>
            <img src="https://pbs.twimg.com/media/FpHl18tXgAEjIGc.jpg" alt="F1 Season Tracker" />
            <div className="features">
                <h2>Features:</h2>
                <ul>
                    <li>View teams and their standings</li>
                    <li>Explore driver details and rankings</li>
                    <li>Discover race tracks and their statistics and add on on the seaon progresses</li>
                </ul>
            </div>
            <p>Start exploring the world of Formula 1 and enjoy the thrill of the 2023 season!</p>
        </div>
    )    
};


export default Home;