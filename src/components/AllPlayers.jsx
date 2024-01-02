import React, { useEffect, useState } from "react";
import { getPlayers } from "../API/index";
import PlayerCard from "./PlayerCard/PlayerCard";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [playerData, setPlayerData] = useState([]);
  useEffect(() => {
    async function getPlayerData() {
      try {
        const players = await getPlayers();
        setPlayerData(players);
        setPlayers(players);
      } catch (err) {
        console.log(err);
      }
    }
    getPlayerData();
  }, []);

  function handleSearch(e) {
    const searchResults = playerData.filter((player) => player.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setPlayers(searchResults);
  }
 

  return (
    <>
      <div style={{display: "flex", flexDirection: "column" }}>
        <h2 style={{ textAlign: "center" }}>Search Players</h2>
        <input style={{ width:"35%", margin: "0 auto", }} type="text" />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "50px",
        }}
      >
        {players.map((puppy) => (
          <PlayerCard key={puppy.id} player={puppy} />
        ))}
        ;
      </div>
    </>
  );
}
