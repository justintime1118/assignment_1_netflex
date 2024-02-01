import React, { useState } from "react";
import styles from "./SignInPage.module.scss";
import { useAuth } from "../../contexts/auth.context";

function SignInPage() {
  const { isLoggedIn, signIn } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClickSignIn = () => {
    if (!username || !password) {
      return alert("아이디 또는 비밀번호를 입력해주세요.");
    }

    if (username === "udemy" && password === "udemy") {
      signIn();
    } else {
      return alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };
  return (
    <div>
      {isLoggedIn ? (
        <div>로그인성공</div>
      ) : (
        <form
          className={styles.form}
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="text"
            placeholder="아이디를 입력해주세요."
            className={styles.input}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            className={styles.input}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button className={styles.button} onClick={handleClickSignIn}>
            로그인하기
          </button>
        </form>
      )}
    </div>
  );
}

export default SignInPage;
