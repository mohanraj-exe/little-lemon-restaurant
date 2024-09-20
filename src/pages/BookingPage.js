import React, { useReducer } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../API/fetchAPI";
import { useNavigate } from "react-router-dom";

function Main() {

  const navigate = useNavigate();

  // Initial state of the useReducer function-initializeTimes
  let initializeTimes;
  const fetchAPIResponse = fetchAPI(new Date());
  initializeTimes = fetchAPIResponse;

  // Function will handle the state change.
  const updateTimes = (availableTimes, action) => {
    // console.log("availableTimes:", availableTimes);
    if (action.type === "date") {
      const fetchAPIResponse = fetchAPI(new Date(action.selectedDate));
      availableTimes = fetchAPIResponse;
      return availableTimes;
    }
  }

  // useReducer function.
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  function submitForm(formData) {
    const formSubmitCheck = submitAPI(formData);
    // console.log(formSubmitCheck);
    if (formSubmitCheck) {
      return navigate('/booking-confirmed-page');
    }
  }

  return (
    <>
      <main>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </main>
    </>
  )
}

function BookingPage() {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  )
}

export default BookingPage;
