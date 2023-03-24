import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Badge from './components/Badge/Badge';
import Button from './components/Button/Button';
import { PhoneIcon } from '@heroicons/react/24/solid'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card-container"                                                   >
        <Badge
          text="Fotboll"
          filled={false}
        />
        <Button 
          text="Button"
          href='#'
          type="primary"
          filled={false}
          icon={<PhoneIcon />}

        />
      </div>
        <Footer />
      
    </div>
  );
}

export default App;
