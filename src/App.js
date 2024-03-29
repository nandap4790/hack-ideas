import { BrowserRouter as Router } from 'react-router-dom';

import { RouteSwitchComponent } from './navigation/router-switch';
import { Header } from './header';
import "firebase/firestore";

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="hack-ideas-container">
        <Header />
        <RouteSwitchComponent />
      </div>
    </Router>
  );
}

export default App;
