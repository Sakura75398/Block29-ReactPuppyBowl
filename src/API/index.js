async function getPlayers() {
    try{
        const res = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2308-ftb-et-web-pt/players")
        cosnt json = await res.json();
        console.log(json.data.players);
        return json.data.players;
    } catch(err) {
        throw err
    }
}

export { getPlayers };