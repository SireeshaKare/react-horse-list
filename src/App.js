import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HorseList from './components/HorseList/HorseList';
import ViewHorse from './components/ViewHorse/ViewHorse';

function App() {
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <Router>
          <Routes>
            <Route path="/" exact element={<HorseList />}></Route>
            <Route path="/horse/:id" element={<ViewHorse />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
