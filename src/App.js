import React from 'react';

import './App.css';
import Fotter from './Components/Fotter/Fotter';
import Headder from './Components/Main-headder/Headder';
import Nabvar from './Components/Navbar/Navbar';
import Servies from './Components/servies/Servies';
import About from './Components/about/About-us';
// import Blog from './Components/blog/Blog';
import Contact from './Components/contact/Contact';
import Development from "./Components/servies/Sevices/Development/Development";
import Training from "./Components/servies/Sevices/Training/Training";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import FullStack from './Components/Program/FullStack';
import Bankingandfinance from './Components/Program/Bankingandfinance';
import DataScience from './Components/Program/DataScience';
import DigitalMarketing from './Components/Program/DigitalMarketing';
import AdvanceDigitalMarketing from './Components/Program/AdvanceDigitalMarketing';
import PHP from './Components/Program/PHP';
import AdvancePHP from './Components/Program/AdvancePHP';
import Python from './Components/Program/Python';
import AdvancePython from './Components/Program/AdvancePython';
import DataStructures from './Components/Program/DataStructures';
import MachineLearning from './Components/Program/MachineLearning';
import ArtificialIntelligence from './Components/Program/ArtificialIntelligence';
import Kid from './Components/Program/Kid';
import C from './Components/Program/C';
import Cplus from './Components/Program/Cplus';
import WebDesigning from './Components/Program/WebDesigning';
import Corejava from './Components/Program/Corejava';
import CorePython from './Components/Program/CorePython';
import Autocad from './Components/Program/Autocad';
import ScrollToTop from './Components/ScrollToTop';
function App() 
{ 

  return (

       <div className="App">
<Router>
<ScrollToTop />
  <Nabvar/>
    <Routes>
      <Route exact path='/' element={<Headder/>}></Route>
      <Route exact path='/Servies' element={<Servies/>}></Route>
      <Route exact path='/About' element={<About/>}></Route>
      {/* <Route exact path='/Blog' element={<Blog/>}></Route> */}
      <Route exact path='/Contact' element={<Contact/>}></Route>
      <Route exact path = "/Training" element={<Training/>}></Route> 
      <Route exact path = "/Development" element={<Development/>}></Route>
      <Route exact path = "/FullStack" element={   <FullStack/>}></Route>
      <Route exact path = "/Banking-and-finance" element={<Bankingandfinance/>}></Route>
      <Route exact path = "/Data-Science" element={<DataScience/>}></Route>
      <Route exact path = "/Digital-Marketing" element={ <DigitalMarketing/>}></Route>
      <Route exact path = "/Advance-Digital-Marketing" element={  <AdvanceDigitalMarketing/>}></Route>
      <Route exact path = "/Web-Development-using-PHP" element={<PHP/>}></Route>
      <Route exact path = "/Advance-Web-Development-using-PHP" element={<AdvancePHP/>}></Route>
      <Route exact path = "/Web-Development-using-Python" element={<Python/>}></Route>
      <Route exact path = "/Advance-Web-Development-using-Python" element={<AdvancePython/>}></Route>
      <Route exact path = "/Data-Structures" element={<DataStructures/>}></Route>
      <Route exact path = "/Machine-Learning" element={<MachineLearning/>}></Route>
      <Route exact path = "/Artificial-Intelligence" element={<ArtificialIntelligence/>}></Route>
      <Route exact path = "/Kid" element={<Kid/>}></Route>
      <Route exact path = "/C" element={<C/>}></Route>
      <Route exact path = "/C++" element={<Cplus/>}></Route>
      <Route exact path = "/Web-Designing" element={<WebDesigning/>}></Route>
      <Route exact path = "/Core-java" element={<Corejava/>}></Route>
      <Route exact path = "/Core-Python" element={<CorePython/>}></Route>
      <Route exact path = "/Autocad" element={<Autocad/>}></Route>
    </Routes>
  <Fotter/>
</Router>

    </div>
      )

}

export default App;
