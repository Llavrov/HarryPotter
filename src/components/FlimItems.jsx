import PropTypes from "prop-types";
import { useCallback } from "react";
import { useDispatch, useSelector} from "react-redux";
import { setDelet, setLike } from "../redux/actions/films";
import likeRed from "../images/likeRed.png";
import likeBlack from "../images/likeBlack.png";
import close from "../images/close.png";
import { motion } from 'framer-motion';

const spring = {
    type: 'spring',
    damping: 25,
    stiffness: 120,
    duration: 0.2,
};


export const FilmItemsList = function() {

    const films = useSelector(({ films }) => films.items);
    const likedFilms = useSelector(({ films }) => films.likedFilms);
    const isLoaded = useSelector(({ films }) => films.isLoaded);
    const filter = useSelector(({ films }) => films.filter);

    // alert(films[0].name);

    if (!isLoaded) {
        return (
            <div><h1>We got problems!</h1></div>
        )
    }
    // alert(filter);
    return (
        <ul className="blockCards">
            {filter ? likedFilms.map(item => (
                <motion.li key={item.id} transition={spring} layout={true}>
                    <FilmItemsCard name={item.name} id={item.id} house={item.house} actor={item.actor} image={item.image} isLiked={item.isLiked} ></FilmItemsCard> 
                </motion.li>
            )) : films.map(item => (
                <motion.li key={item.id} transition={spring} layout={true}>
                    <FilmItemsCard name={item.name} id={item.id} house={item.house} actor={item.actor} image={item.image} isLiked={item.isLiked} ></FilmItemsCard> 
                </motion.li>
            ))
            }
        </ul>
    )
}


const FilmItemsCard = function({ name, id, house, actor, image, isLiked}) {
    const dispatch = useDispatch();
    // alert(name);

    const handlDelet = useCallback(
        () => dispatch(setDelet(id)),
        [id, dispatch],
    );

    const handleLike = useCallback(
        () =>
            dispatch(setLike(id)),
        [id, dispatch],
    );


    return (
        <div className="card-context">
            <div className="delet-btn" onClick={handlDelet}><img src={close} alt="Download error"></img></div>
            <div className="card-img">{image ? <img src={image} alt="Download error"/> : <img src={"https://upload.wikimedia.org/wikipedia/ru/b/b4/Harry_Potter_and_the_Philosopher%27s_Stone_%E2%80%94_movie.jpg"} alt="Download error"/>}</div>
            <div className="card-text">
                <div className="card-name">{name}</div>
                <div className="card-faculty">Faculty: {house}</div>
                <div className="card-actor">Actor: {actor}</div>
            </div>
            <div className="card-like-btn" onClick={handleLike}>
                {isLiked ? <img src={likeRed} alt="Download error"></img> : <img src={likeBlack} alt="Download error"></img>}
            </div>
        </div>
    );

}


FilmItemsCard.propTypes = {
    name : PropTypes.string,
    image : PropTypes.string,
    house : PropTypes.string,
    actor : PropTypes.string,
    id : PropTypes.string.isRequired,
    isLiked : PropTypes.bool.isRequired,
};