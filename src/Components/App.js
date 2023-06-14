import React, { useEffect, useState } from "react";
import {Switch, Route} from 'react-router-dom'
import Navbar from "./Navbar";
import Home from "./Home";
import Teams from './Teams';
import Drivers from './Drivers';
import Tracks from './Tracks';
import '../Styles/App.css';

function App() {

  const [teams, setTeams] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/teams')
    .then((r)=>r.json())
    .then((data)=> {
      setTeams(data)
    })
  }, [])


  useEffect(() => {
    fetch('http://localhost:3000/drivers')
    .then((r)=>r.json())
    .then((data)=> {
      setDrivers(data)
    })
  }, [])


  useEffect(() => {
    fetch('http://localhost:3000/tracks')
    .then((r)=>r.json())
    .then((data)=> {
      setTracks(data)
    })
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/teams'>
          <Teams teams={teams} setTeams={setTeams}/>
        </Route>
        <Route path='/drivers'>
          <Drivers drivers={drivers} setDrivers={setDrivers}/>
        </Route>
        <Route path='/tracks'>
          <Tracks tracks={tracks} setTracks={setTracks}/>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}


export default App;