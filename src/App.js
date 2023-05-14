import logo from './logo.svg';
import './App.css';
import{Routes,Route,Link}from "react-router-dom";
// import styles from"./App.module.css";
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';

// import'./style.css';


/*export const App=()=>{
  return (
    <>
<h1>Hey</h1>
</>
  );
}
export const Application=()=>{
  return (
    <>
<h1>What's up</h1>
</>
  );
}

export const SecondApp=()=>{
  return (
    <>
<h1>How are you?</h1>
</>
  );
}*/


// export const HomePage = () => {
//   return <h1>This is a Home Page</h1>;
// };
// export const AboutPage = () => {
//   return <h1>This is a About Page</h1>;
// };
// export const ContactPage = () => {
//   return <h1>This is a Contact Page</h1>;
// };
 const App=()=>{
return(
    <>
      <nav className="navbar">
        <div className='navbrand'>Brand</div>
        <ul className="navlist">
        <li className='navlink'>
          <Link 
          to='/'
          >
          Home
          </Link>
          </li>
        <li className='navlink'>
        <Link 
          to='/about'
          >
          AboutUs
          </Link>
          </li>
        <li className='navlink'>
        <Link 
          to='/contact'
          >
          Contact
          </Link>
          </li>
       </ul>
      </nav>

      
      <Routes>
       <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
)
};
export default App;
