import './App.css';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Dining from './Components/Dining/Dining';
import Facilities from './Components/Facilities/Facilities';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Header from './Components/Header/Header';
import Reservation from './Components/Reservation/Reservation';
import Review from './Components/Review/Review';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Facilities/>
      <Dining/>
      <Review/>
      <Reservation/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
