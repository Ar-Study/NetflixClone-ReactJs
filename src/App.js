import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged In
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        // console.log(userAuth);
      } else {
        // Logged Out
        dispatch(logout());
      }
      return unsubscribe;
    });
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {/* Pada React Router Dom Versi 5 Seperti ini */}
        {/* <Switch>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch> */}

        {/* Namun pada versi 6 komponent routes menggantikan fungsi switch dengan mengubah komponen yang ingin dirender menjadi element  */}
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
