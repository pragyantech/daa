import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AlgorithmAnalysis from './pages/AlgorithmAnalysis';
import OrderOfGrowth from './pages/OrderOfGrowth';
import AsymptoticAnalysis from './pages/AsymptoticAnalysis';
import Notations from './pages/Notations';
import Complexity from './pages/Complexity';
import DesignTechniques from './pages/DesignTechniques';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/algorithm-analysis" component={AlgorithmAnalysis} />
          <Route path="/order-of-growth" component={OrderOfGrowth} />
          <Route path="/asymptotic-analysis" component={AsymptoticAnalysis} />
          <Route path="/notations" component={Notations} />
          <Route path="/complexity" component={Complexity} />
          <Route path="/design-techniques" component={DesignTechniques} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;