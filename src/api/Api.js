import { ErrorOutlineSharp } from "@material-ui/icons";

const API_KEY = "QLqDABGoIBhgCqf2452s0uag8qx1"

//get all the upcoming matches

export const getMatches = () => {
    const url = `https://cricapi.com/api/matches/?apikey=${API_KEY}`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log("Error:", error))
}

//load match detail

export const getMatchDetail = (id) => {
    const url = `https://cricapi.com/api/cricketScore/?apikey=${API_KEY}&unique_id=${id}`;
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error))
}