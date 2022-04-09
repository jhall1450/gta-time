import React, { useState } from 'react';

const Timer = () => {
  const [timeSince, setTimeSince] = useState(0);

  setInterval(() => setTimeSince(
    (Date.now() / 1000) - 1383235200
  ));

  const secondsInGame = timeSince * 30
  const yearsInGame = secondsInGame / 3.154e+7
  const monthsInGame = (yearsInGame - Math.floor(yearsInGame)) * 12
  const daysInGame = ((monthsInGame - Math.floor(monthsInGame)) * 30.4167)
  const hoursInGame = ((daysInGame - Math.floor(daysInGame)) * 24)
  const minutesInGame = ((hoursInGame - Math.floor(hoursInGame)) * 60)

  return (
    <>
    <h3>How much time has passed in GTA Online since release?</h3>
    <p>Years in game: {Math.floor(yearsInGame)}</p>
    <p>Months in game: {Math.floor(monthsInGame)}</p>
    <p>Days in game: {Math.floor(daysInGame)}</p>
    <p>Hours in game: {Math.floor(hoursInGame)}</p>
    <p>Minutes in game: {Math.floor(minutesInGame)}</p>
    </>
  )
}

export default Timer