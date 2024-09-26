import './App.css';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import Homepage from './pages/Homepage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/booking-page' element={<BookingPage />} />
        <Route path='/booking-confirmation-page' element={<ConfirmationPage />} />
      </Routes>
    </>
  );
}

export default App;
