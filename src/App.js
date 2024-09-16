import './App.css';
import BookingPage from './pages/BookingPage';
import Homepage from './pages/Homepage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/booking-page' element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
