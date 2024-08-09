import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LeadersPage from './pages/LeadersPage';
import TrainingPage from './pages/TrainingPage';
import { LoginForm } from './LoginForm/LoginForm';


function App() {
  return (
    <Routes>
  <Route path="/" element={<LoginForm/>} />
      <Route path="/leaders" element={<LeadersPage />}/>
      <Route path="/training" element={<TrainingPage />} />
    
    </Routes>
  );
}

export default App;
