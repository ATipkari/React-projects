
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import News from './components/News1';
import {BrowserRouter as Router, Route} from "react-router-dom";
// import Lodding from './component/Lodding'
import LoadingBar from 'react-top-loading-bar'

// import Switch from Switch;


function App() {
  const [progress, setProgress] = useState(0)
  return (
   <>
   <Router>
    <Navbar/>
    
    {/* <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />   */}
    
    <Route exact path="/"><News country="in" category="General" key={"general"} pageSize={16} page={1}/></Route>
    <Route exact path="/science"><News country="in" category="Science" key={"Science"} pageSize={16} page={1}/></Route>
    <Route exact path="/sports"><News country="in" category="Sports"  key={"sports"} pageSize={16} page={1}/></Route>
    <Route exact path="/business"><News country="in" category="Business" key={"business"} pageSize={16} page={1}/></Route>
    <Route exact path="/entertainment"><News country="in" category="Entertainment" key={"entertainment"} pageSize={16} page={1}/></Route>
    <Route exact path="/health"><News country="in" category="Health" key={"health"} pageSize={16} page={1}/></Route>
    <Route exact path="/technology"><News country="in" category="Technology" key={"technology"} pageSize={16} page={1}/></Route>
    
    </Router>
   </>
  )
}

export default App;
