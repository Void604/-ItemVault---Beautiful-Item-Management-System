import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ViewItems from './pages/ViewItems';
import AddItem from './pages/AddItem';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<ViewItems />} />
          <Route path="/add" element={<AddItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;