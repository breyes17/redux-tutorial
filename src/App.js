import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav';
import Whook from './component/Whook';
import Hooks from './component/Hooks';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Whook />} />
          <Route path="/hooks" element={<Hooks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
