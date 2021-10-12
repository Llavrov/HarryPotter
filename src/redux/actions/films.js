import axios from 'axios';
// {
// 	name : "Harry Potter",
// 	image : "url",
// 	house : "Gryffindor",
// 	actor : "Daniel Radcliffe",
// 	Id: "unical_string",
// 	isLiked: false,
// }

const setLoaded = (payload) => ({
    type: "SET_LOADED",
    payload,
})

export const fetchFilms = (filter = false) => (dispatch) => {
    setLoaded(false);
    axios.get("https://hp-api.herokuapp.com/api/characters").then(({data}) => {
        // data = JSON.stringify(data);
        console.log(data);
        dispatch(setFilms(data, false));
    });
}

export const setFilms = (filmsItems, isLiked) => ({
    type : "SET_FILMS",
    films : filmsItems.map(item => item = (
        {
            name: item.name,
            image : item.image,
            house : item.house,
            actor : item.actor,
            id : generateId(),
            isLiked : isLiked,
        })),
});

export const setDelet = (payload) => ({
    type: "SET_DELET",
    id: payload,
});

export const setLike = (payload) => ({
    type: "SET_LIKE",
    id: payload,
});

export const setFilter = (payload) => ({
    type: "SET_FILTER",
    filter: payload,
})

function generateId() {
    return `${Date.now().toString(36)}-${Math.floor(
        Math.random() * 1e16,
    ).toString(36)}`;
}