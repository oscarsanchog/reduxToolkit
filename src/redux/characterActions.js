import axios from "axios";
import { getAllChars, getCharById } from "./characterSlice";

export const getChars = () => (dispatch) => {
    axios('https://rickandmortyapi.com/api/character')
    .then(res => dispatch(getAllChars(res.data.results)))
    .catch(error => console.log(error))
}

export const getCharsById = (id) => async (dispatch) => {
    try {
        const { data } = await axios('https://rickandmortyapi.com/api/character/' + id)
        dispatch(getCharById(data))
    } catch (error) {
        console.log(error);
    }
}
