import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Badge from './components/Badge/Badge';

function App() {
  return (
    <div className="App">
      <Header />
      <Badge
        text="Fotboll"
      />
      <Footer />
    </div>
  );
}

export default App;
