import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MoviesDetail from "./pages/MoviesDetailPage";
import SignInPage from "./pages/SignInPage";
import { useState } from "react";
import { AuthProvider } from "./contexts/auth.context";
import MyPage from "./pages/MyPage/MyPage";
import { ProfileProvider } from "./contexts/profile.context";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthProvider>
      <ProfileProvider>
        <Routes>
          <Route
            element={
              <DefaultLayout
              // isLoggedIn={isLoggedIn}
              // setIsLoggedIn={setIsLoggedIn}
              />
            }
          >
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/my-page" element={<MyPage />} />
            <Route path="/movies/:movieId" element={<MoviesDetail />} />
          </Route>
        </Routes>
      </ProfileProvider>
    </AuthProvider>
  );
}

export default App;
