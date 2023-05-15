import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import ContactUsButton from '../ContactButton';


export const Navbar = () => {
   return (
      <header className="header" id="header">

         <div className="container h-100 d-flex align-center justify-between">
            <Link to="/" className="header__logo">
               <img src={Logo} alt="logo" />
            </Link>
            <nav className="header__nav">
               <NavLink to="/" className="header__link canHover">Home</NavLink>
               <NavLink to="/about" className="header__link canHover">About</NavLink>
               <NavLink to="/services" className="header__link canHover">Services</NavLink>
               <NavLink to="/quote" className="header__link canHover">Get a quote</NavLink>
               <NavLink to="tel:+14702607325" className="header__link"><button className="header__button">+1 470-260-7325</button></NavLink>
               <NavLink to="/contact" className="header__link"><ContactUsButton></ContactUsButton></NavLink>

            </nav>
         </div>
      </header>
   );
};