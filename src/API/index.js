async function getPlayers() {
  try {
    const res = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2308-ftb-et-web-pt/players"
    );
    const json = await res.json();
    return json.data.players;
  } catch (err) {
    throw err;
  }
}

async function getPlayerById(id) {
  try {
    const res = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2308-ftb-et-web-pt/players/${id}`
    );
    const json = await res.json();
    return json;
  } catch (err) {
    throw err;
  }
}

async function createPlayer(playerData) {
  try {
    console.log(playerData);
    const res = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2308-ftb-et-web-pt/players"
      { 
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(playerData),
    } 
      );
    const json = await res.json();
    console.log(json);
    return json;
  } catch (err) {
    throw err;
  }
}

async function deletePlayer(id) {
    try {
        const res = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2308-ftb-et-web-pt/players/${id}`)
        const json = await res.json();
        console.log(json);
        return json;
    } catch (err) {
        throw err;
    }
}

export { getPlayers, getPlayerById, createPlayer, deletePlayer };
