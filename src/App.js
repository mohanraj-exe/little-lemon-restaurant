import './App.css';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import Homepage from './pages/Homepage';

import ConfirmedBooking from './components/confirmedBooking';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/booking-page' element={<BookingPage />} />
        <Route path='/booking-confirmed-page' element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default App;
