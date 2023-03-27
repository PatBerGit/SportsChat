import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Card from './components/Card/Card';
import { PhoneIcon } from '@heroicons/react/24/solid'

function App() {
  return (
    <div className="App">
      <Header />
        <main className='main-content'>
          <section className="card-container">
            <Card 
              body=''
              title='2023-03-27' 
              image1='https://sportteamslogo.com/api?key=e55cd0547d2a4d0797f4eb4a5e2aea43&size=big&tid=35'
              image1-alt= "Manchester United"
              image2='https://sportteamslogo.com/api?key=e55cd0547d2a4d0797f4eb4a5e2aea43&size=big&tid=17'
              image2-alt= "Manchester City"
              indicator='Cmore'
              subtitle='kl 19:00'
              badge={{
                text: "Fotboll",
                filled: true,
              }}
              btn={{ 
                text: "Chatta",
                href: '#',
                type: "primary",
                filled: true,
                icon: <PhoneIcon />
              }}
            />
          </section>
        </main>
      <Footer />
      
    </div>
  );
}

export default App;
