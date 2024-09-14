import './App.css';
import ReserveTable from './components/ReserveTable';
import Homepage from './pages/Homepage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/reserve-table' element={<ReserveTable />} />
      </Routes>
    </>
  );
}

export default App;
