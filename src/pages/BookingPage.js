import React, { useReducer } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import BookingForm from "../components/BookingForm";

function Main() {

  // const [availableTimes, ] = useState([
  //   { time: "Select time", value: "" },
  //   { time: "17:00", value: "17:00" },
  //   { time: "18:00", value: "18:00" },
  //   { time: "19:00", value: "19:00" },
  //   { time: "20:00", value: "20:00" },
  //   { time: "21:00", value: "21:00" },
  //   { time: "22:00", value: "22:00" }
  // ])

  const initializeTimes = ""
  const availableTimes = [
    { time: "Select time", value: "" },
    { time: "17:00", value: "17:00" },
    { time: "18:00", value: "18:00" },
    { time: "19:00", value: "19:00" },
    { time: "20:00", value: "20:00" },
    { time: "21:00", value: "21:00" },
    { time: "22:00", value: "22:00" }
  ];

  const updateTimes = (availableTimes, action) => {
    if (action.type === "date") {
      availableTimes = [
        { time: "Select time", value: "" },
        { time: "17:00", value: "17:00" },
        { time: "18:00", value: "18:00" },
        { time: "19:00", value: "19:00" },
        { time: "20:00", value: "20:00" },
        { time: "21:00", value: "21:00" },
        { time: "22:00", value: "22:00" }
      ];
      return availableTimes;
    }
  }

  const [, dispatch] = useReducer(updateTimes, initializeTimes)

  return (
    <>
      <main>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} updateTimes={updateTimes} />
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
