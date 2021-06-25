import axios from 'axios';

export const getFilms = async () => {
    try {
        const res = await axios.get('https://swapi.dev/api/films/')
        return res.data
    }
    catch (error) {
        console.log(error)
    }
}