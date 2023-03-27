import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Card from './components/Card/Card';
import { PhoneIcon } from '@heroicons/react/24/solid'

function App() {
  return (
    <div className="App">
      <Header />
      
      <body>
        <section className="card-container">
        <Card 
          body='Hi'
          title='Title' 
          image='https://source.unsplash.com/random'
          indicator='Cmore'
          subtitle='Manchester derby'
          badge={{
            text: "Fotboll",
            filled: true,
          }}
          btn={{ 
            text: "Button",
            href: '#',
            type: "primary",
            filled: true,
            icon: <PhoneIcon />
        }}/>s
      </section>
      </body>
      
      <Footer />
      
    </div>
  );
}

export default App;
