import React from "react";
import getTMDBImgSrc from "../../utils/getTMDBImgSrc";
import styles from "./MoviesDetail.module.scss";

function MovieDetailChild({ movie }) {
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

export default MovieDetailChild;
