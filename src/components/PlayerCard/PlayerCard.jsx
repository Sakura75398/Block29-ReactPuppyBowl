import React from "react";
import "./PlayerCard.css";

export default function PlayerCard({ player, component }) {
    console.log(player);
    const { name, breed, imageURL, id, team } = player;
    return (
        <div className="player-card-container">
            <h2>{name}</h2>
            <img src={imageURL} alt={`A dog named ${name}`}/>
            <h3>{breed}</h3>
            {team && <h3>{team?.name}</h3>}
            {component !== "detail" && (
            <button onCLick={() => navigate(`/players/${id}`)}>See Details</button>
            )}
        </div>
    );
}