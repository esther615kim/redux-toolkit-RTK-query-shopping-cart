import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
