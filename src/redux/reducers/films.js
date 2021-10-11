const initialState = {
    items: [],
    isLiked: false,
    likedFilms : [],
    filter : false,
};


const films = (state = initialState, action) => {
    switch (action.type ){
        case "SET_FILMS":
            return {
                ...state,
                items: action.films,
                likedFilms: action.likedFilms,
                filter: state.filter,
                isLoaded: true,
            };
        case "SET_LIKE":
            return {
                ...state,
                items: state.items.map(item => item.id === action.id ? item = {
                    name: item.name,
                    image : item.image,
                    house : item.house,
                    actor : item.actor,
                    id : item.id,
                    isLiked : !item.isLiked,
                } : item),
                likedFilms : state.items.filter(item => item.isLiked),
                isLoaded: true,
            };
        case "SET_DELET":
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.id),
                filter: state.filter,
                // likedFilms : state.items.filter(item => item.id !== action.id),
                isLoaded: true,
            }
        case "SET_FILTER":
            return {
                ...state,
                likedFilms : state.items.filter(item => item.isLiked),
                filter: action.filter,
            }
        case "SET_LOADED":
            return {
                ...state,
                isLoaded: action.isLoaded,
            }
        default:
            return state;
    }
};

export default films;