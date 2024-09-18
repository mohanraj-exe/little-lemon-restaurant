import React, { useReducer } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import BookingForm from "../components/BookingForm";

function Main() {

  // Initial state of the useReducer function.
  const initializeTimes = [
    { time: "Select time", value: "" },
    { time: "17:00", value: "17:00" },
    { time: "18:00", value: "18:00" },
    { time: "19:00", value: "19:00" },
    { time: "20:00", value: "20:00" },
    { time: "21:00", value: "21:00" },
    { time: "22:00", value: "22:00" }
  ];

  // Function will handle the state change.
  const updateTimes = (availableTimes, action) => {
    if (action.type === "date") {
      // console.log("triggered!");
      availableTimes = initializeTimes;
      return availableTimes;
    }
  }

  // useReducer function.
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

  return (
    <>
      <main>
        <BookingForm dispatch={dispatch} availableTimes={availableTimes} />
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
