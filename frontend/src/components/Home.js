import React  from 'react';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import Homepage from "./homepage/Homepage";


const Home = () => {



    return (
      <div>
  
        <Navbar />
        <Homepage />
        <Footer/>
        
  
  
        {/* <div>
          <CookieConsent
            enableDeclineButton
            buttonText="J'accepte"
            declineButtonText="Je refuse"
          >
            Ce site utilise des cookies pour améliorer votre expérience.
          </CookieConsent>
        </div> */}
  
      </div>
    )
  
  }
  
  export default Home;