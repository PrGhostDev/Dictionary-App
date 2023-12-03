// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import HistoryPage from "./components/HistoryPage";
import WordDetailsPage from "./components/WordDetailsPage";

import { Provider } from "react-redux";
import store from "./store/configureStore";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/word/:word" element={<WordDetailsPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;