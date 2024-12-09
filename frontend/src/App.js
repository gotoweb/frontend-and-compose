import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PollList from './components/PollList';
import PollDetail from './components/PollDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PollList />} />
        <Route path="/polls/:id" element={<PollDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
