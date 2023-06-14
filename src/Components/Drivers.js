import React, {useEffect, useState} from "react";
import '../Styles/Drivers.css'

function Drivers({ drivers, setDrivers }) {

    return(
    <div>
        <img className="drivers-header-img" src="https://i.guim.co.uk/img/media/cefc0674922217b6e0d646d338f08412ef9b9ff5/54_207_4975_2985/master/4975.jpg?width=1300&quality=45&dpr=2&s=none" />
        
        <div className="drivers-container">
            <h1>Drivers</h1>
            <div className="drivers-grid">
                {drivers.map((driver)=> {
                    return(
                        <div key={driver.id} className="driver-card">
                            <h2>{driver.name}</h2>
                            <img src={driver.image} />
                            <p>{driver.standing}</p>
                            <p>{driver.team}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    )
};

export default Drivers;