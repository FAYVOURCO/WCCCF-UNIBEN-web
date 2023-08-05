import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import "./App.css";
import HomePage from "./components/HomePage";
import Media from "./components/Media";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    
    <BrowserRouter> 
        <Header/>

        <Routes>
         <Route exact path="/" Component={HomePage}/>
         <Route  path="/media" Component={Media}/>  
         <Route  path="/aboutus" Component={AboutUs}/>  
         <Route  path="/contactus" Component={ContactUs}/>  
        </Routes>
        
       <Footer/>
  

 
 
      
      
     </BrowserRouter>
    
  );
}


export default App;
