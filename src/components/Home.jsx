import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms, setFilter } from "../redux/actions/films";
// import films from "../redux/reducers/films";
import { FilmItemsList } from "./FlimItems";
import Particles from 'react-particles-js';
import "../css/cards.css"
import particleParams from "./particleParams";

function Home() {
    const dispatch = useDispatch();
    const filter = useSelector(({ films }) => films.filter);
    const likedFilms = useSelector(({ films }) => films.likedFilms);

    React.useEffect(() => {
        dispatch(fetchFilms([]));
    }, [dispatch]);

    const likeBtn = function() {
        dispatch(setFilter(!filter));
    }

    // alert(Object.entries(films[0]));

    
    return (
        <div className="Content-box">
             <Particles 
             className = "particles"
              params={particleParams}
              style={{
                width: '100%',
              }}
            />
                <div className="text-potter"><h1>Universal of Harry Potter</h1></div>
                <div onClick={likeBtn} className="like-btn"> {filter ? <h1>Show all</h1> : <h1>Show liked</h1>}</div>
                <FilmItemsList ></FilmItemsList>
            </div>

    );
}

export default Home;