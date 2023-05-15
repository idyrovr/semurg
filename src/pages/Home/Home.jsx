import AboutHome from '../../components/AboutHome';
import Advantage from '../../components/Advantage';
import ContactHome from '../../components/ContactHome';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';

import './Home.scss'

const Home = () => {
   return (
      <div className='home'>
         <Hero />
         <AboutHome />
         <Advantage />
         <ContactHome />
         <Footer />
      </div>
   );
};
export default Home