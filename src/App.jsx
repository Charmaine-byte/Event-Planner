import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import EventPlanner from './Components/EventPlanner';
import EventForm from './Components/EventForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventPlanner />} />
        <Route path="/start" element={<EventForm />} />
      </Routes>
    </Router>
  );
}

export default App;
