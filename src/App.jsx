import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import Login from "./components/pages/Login";
import MainPage from "./components/pages/MainPage";
import ProtectedRoute from "./components/contexts/ProtectedRoutes";
import Details from "./components/pages/Details";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/main"
            element={
              <ProtectedRoute>
                <MainPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/details/:id"
            element={
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
