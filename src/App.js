
import Login from './Login/Login.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Login/SignUp.js';
import Home from './Home/Home.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
