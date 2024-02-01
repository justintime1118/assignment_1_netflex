import React, { useState } from "react";
import styles from "./MyPage.module.scss";
import { useProfile } from "../../contexts/profile.context";
import MoviesList from "../../components/MoviesList";

function MyPage() {
  const { saveNickname, likedMovies } = useProfile();
  const [newNickname, setNewNickname] = useState();

  const handleClickSaveNickname = () => {
    if (!newNickname) {
      return alert("닉네임을 입력해주세요.");
    } else {
      saveNickname(newNickname);
    }
  };

  return (
    <>
      <form
        className={styles.form}
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          className={styles.input}
          type="text"
          value={newNickname}
          onChange={(event) => setNewNickname(event.target.value)}
        />
        <button className={styles.button} onClick={handleClickSaveNickname}>
          닉네임 수정하기
        </button>
      </form>
      <MoviesList listTitle="좋아요한 영화" movies={likedMovies} />
    </>
  );
}

export default MyPage;
