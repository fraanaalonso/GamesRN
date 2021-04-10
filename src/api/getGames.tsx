import axios from "axios";

const gamesFree = axios.create({
    baseURL: 'https://www.freetogame.com/api/games'
});

export default gamesFree;