import react from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from "./navbar.js";
import Footer from "./frontend/Footer.js";
import Note from "./frontend/Note.js";



function App() {
  return(
    <div>
<Navbar/>
<Note />
<Footer/>


    </div>
  );

 
 
}



export default App;
