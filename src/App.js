import './App.css';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import PageNotFound from './Screens/PageNotFound';
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='*' element={< PageNotFound />} />
          <Route path='/' element={< HomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
