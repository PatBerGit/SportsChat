import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Card from './components/Card/Card';
import Badge from './components/Badge/Badge';
import Button from './components/Button/Button';
import { PhoneIcon } from '@heroicons/react/24/solid'

function App() {
  return (
    <div className="App">
      <Header />
      <section className="card-container"
      /*
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
    */                                     >
      <Card 
      body='Hi'
      title='Title' 
      //image='https://source.unsplash.com/random'
      badge={{
        text: "Fotboll",
        filled: true,
      }}
      btn={{ 
        text: "Button",
        href: '#',
        type: "primary",
        filled: false,
        icon: <PhoneIcon />
      }}/>
      </section>
      <Footer />
      
    </div>
  );
}

export default App;
