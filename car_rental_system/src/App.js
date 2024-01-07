import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import CustomerHome from './Components/Customer/Home';
import OderDetails from './Components/Owner/OderDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/CustomerHome" element={<CustomerHome />} />
            <Route path="/OderDetails" element={<OderDetails />} />
            
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;