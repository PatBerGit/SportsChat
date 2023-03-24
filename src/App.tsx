import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Badge from './components/Badge/Badge';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card-container"                                                   >
        <Badge
          text="Fotboll"
          filled={false}
        />
      </div>
        <Footer />
      
    </div>
  );
}

export default App;
