import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const user = null;
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
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
