import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import getTMDBImgSrc from "../../utils/getTMDBImgSrc";
import styles from "./MoviesDetail.module.scss";
import { useProfile } from "../../contexts/profile.context";

function MoviesDetail() {
  //   const params = useParams(); params는 object
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { likedMovies, likeMovie, unlikeMovie } = useProfile();

  useEffect(() => {
    api.movies.getMovie(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  if (movie === null) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <section className={styles.mainInfo}>
        <img
          className={styles.posterImage}
          src={getTMDBImgSrc(movie.poster_path)}
          alt={movie.title}
        />
        <div className={styles.mainInfoRight}>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.overview}>{movie.overview}</p>
          <ul className={styles.genres}>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <strong>{movie.vote_average}</strong>
        </div>
      </section>
      {likedMovies.find((movie) => movie.id === movieId) ? (
        <button onClick={() => unlikeMovie(movie)}>좋아요취소</button>
      ) : (
        <button onClick={() => likeMovie(movie)}>좋아요</button>
      )}
      <section>
        <img
          className={styles.posterImage}
          src={getTMDBImgSrc(movie.backdrop_path)}
          alt={movie.title}
        />
      </section>
    </div>
  );
}

export default MoviesDetail;
