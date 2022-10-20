import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Home, CreateList } from './components'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<CreateList />} />
        </Routes>
      </Router>
    </div>
  );
}
 
export default App;
