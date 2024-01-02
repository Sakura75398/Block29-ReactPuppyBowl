import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPlayerById, deletePlayer } from "../API";
import PlayerCard from "./PlayerCard/PlayerCard";

export default function SinglePlayer() {
    const navigate = useNavigate();
    const [puppy, setPuppy] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function getPlayerData() {
            try {
                const puppyObj = await getPlayerById(id);
                if(puppyObj.data === null) {
                    navigate("/");
                }
                setPuppy(puppyObj.data.player);
            } catch (err) {
                console.log(err);
            }
        }
        getPlayerData();
    }, [navigate]);

    async function handleDelete() {
        try {
            const result = await deletePlayer(id);
            if(result.success){
                alert("Pupper successfully removed from the roster!");
                navigate("/");
            }
        }catch (err) {
            console.log(err)''
        }
    }

    return (
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <PlayerCard player={puppy} component={"detail"}/>
            <button onClick={handleDelete}>Remove Pup from <Roster></Roster></button>
        </div>
    );
}