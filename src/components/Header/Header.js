import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useAuth } from "../../contexts/auth.context";
import { useProfile } from "../../contexts/profile.context";

function Header() {
  const { isLoggedIn, logOut } = useAuth();
  const { nickname } = useProfile();

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        NETFLEX
      </Link>
      <nav>
        <ul>
          {isLoggedIn ? (
            <li>
              <Link to="/my-page">{nickname}의 마이페이지</Link>
              <button onClick={logOut}>로그아웃</button>
            </li>
          ) : (
            <li>
              <Link to="/sign-in">로그인하기</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
