import React, { useContext } from "react";
import { Link } from "react-router-dom";
import getTMDBImgSrc from "../../utils/getTMDBImgSrc";
import styles from "./MoviesListItem.module.scss";
import AuthContext, { useAuth } from "../../contexts/auth.context";
import ProfileContext, { useProfile } from "../../contexts/profile.context";

function MoviesListItem({ movie }) {
  const { isLoggedIn } = useAuth();
  const { likedMovies, likeMovie, unlikeMovie } = useProfile();
  return (
    <div>
      <Link to={`/movies/${movie.id}`} className={styles.wrapper}>
        <img src={getTMDBImgSrc(movie.backdrop_path)} alt={movie.title} />
        <h6>{movie.title}</h6>
      </Link>
      {likedMovies.find((likedMovie) => likedMovie.id === movie.id) ? (
        <button onClick={() => unlikeMovie(movie)}>좋아요취소</button>
      ) : (
        <button onClick={() => likeMovie(movie)}>좋아요</button>
      )}
    </div>
  );
}

export default MoviesListItem;
