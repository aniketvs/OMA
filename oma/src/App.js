import "bootstrap/dist/css/bootstrap.min.css"
import logo from './logo.svg';
import './App.css';

import Footer from "./common/Footer/Footer"
import Meet from './common/Meet/Meet';
import Hero from './common/Hero/Hero';
import Header from './common/Header/Header';
import CircularComponent from "./common/CircularComponent/CircularComponent";
import AestheticGynacelogy from "./common/AestheticGynacelogy/AestheticGynacelogy";

function App() {  
  return (
    <>
      <Header />
      <Hero
        imgSrc={'/images/AboutAestheticGynecology.png'}
        header={'AESTHETIC GYNECOLOGY'}
        headLine={'Dr. Tanuja Uchil - The leading Aesthetic Gynecologist in, Mumbai'}
        descOne={'Will talk about healthcare center dedicated to woman and childcare, the complexities of women\'s health. Also talk about our team at OMA Hospital ensuring the utmost Priority on Care and Comfort when it comes to Maternity Services.'}
        desctwo={'Our Team is Excellently Trained, Highly Competent and Reputed in Obstetrics. With dozens of Luxuries and Amenities we feel more like a Hotel than a Hospital.'}
      />
      <CircularComponent />
      <div className="banner-image">
        <img 
          src="/images/CoverImg.png"
        />
      </div>
      <AestheticGynacelogy/>
      <Meet />
      <Footer />
    </>
  );
}

export default App;
