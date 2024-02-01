const { createContext, useState, useContext } = require("react");

const initialValue = {
  nickname: "초기닉네임",
  saveNickname: () => {},
  likedMovies: null,
};

const ProfileContext = createContext(initialValue);

export function ProfileProvider({ children }) {
  const [nickname, setNickname] = useState("초기닉네임");

  const saveNickname = (nickname) => setNickname(nickname);

  const [likedMovies, setLikedMovies] = useState([]);

  const likeMovie = (selectedMovie) =>
    setLikedMovies([...likedMovies, selectedMovie]);

  const unlikeMovie = (selectedMovie) =>
    setLikedMovies(
      likedMovies.filter((movie) => movie.id !== selectedMovie.id)
    );

  const value = {
    nickname,
    saveNickname,
    likedMovies,
    likeMovie,
    unlikeMovie,
  };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);

export default ProfileContext;
