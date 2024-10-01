import React, {
    useState,
    // useReducer,
    // useEffect
} from "react";
import useSubmit from "../Hooks/useSubmit";
// import { VStack, StackDivider, Box } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';

import "../styles/BookingForm.css"

function BookingForm({ availableTimes, dispatch, submitForm }) {
    // console.log("availableTimes:", availableTimes);

    const { isLoading, submitAPI, navigateAPI } = useSubmit();
    // console.log("isLoading:", isLoading);

    const [booking, setBooking] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: '',
        touched: {
            date: false,
            time: false,
            guests: false,
            occasion: false,
        },
        errors: {
            date: '',
            time: '',
            guests: '',
            occasion: '',
        }
    });


    const validateField = (name, value) => {
        let error = '';
        // #2
        // console.log("#2 value validation:", name, value);
        if (name === 'date') {
            if (!value) {
                error = 'Date is required';
            }
        } else if (name === 'time') {
            if (!value) {
                error = 'Time is required';
            }
        } else if (name === 'guests') {
            if (!value) {
                error = 'Guests is required';
            } else if (!/^[1-9]$|^10$/.test(value)) {  // Check if the value is between 1 and 10
                error = 'Guests must be a number between 1 and 10';
            }
        } else if (name === 'occasion') {
            if (!value) {
                error = 'Occasion is required';
            }
        }

        return error;
    };

    // Optional: Real-time validation while typing
    const realTimeValidation = (name, value) => {
        // #3
        const error = validateField(name, value);
        // console.log("#3 error:", error);
        setBooking(booking => ({
            ...booking,
            errors: {
                ...booking.errors,
                [name]: error,
            }
        }));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log("e:", name, value);
        // #1
        // console.log("#1 inputs:", name, value);

        if (name === "date") {
            setBooking(booking => ({
                ...booking,
                [name]: value,
            }));

            realTimeValidation(name, value);

            dispatch({ type: "date", selectedDate: value });
        } else {
            setBooking(booking => ({
                ...booking,
                [name]: value,
            }));

            realTimeValidation(name, value);
        }
    }

    const handleBlur = (e) => {
        const { name, value } = e.target;
        // console.log("e:", value, name);
        // #1
        // console.log("#1 inputs:", name, value);
        setBooking(booking => ({
            ...booking,
            [name]: value,
            touched: {
                ...booking.touched,
                [name]: true
            }
        }));

        realTimeValidation(name, value);
    }

    const handleClear = async () => {
        const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        setBooking(booking => ({
            ...booking,
            date: '',
            time: '',
            guests: '',
            occasion: '',
            touched: {
                date: false,
                time: false,
                guests: false,
                occasion: false
            }
        }))
        await wait(500);
    }

    const handleSubmit = async (e) => {
        // const { name, value } = e.target;
        e.preventDefault();
        const { date, time, guests, occasion } = booking;
        const formData = { date, time, guests, occasion };
        // console.log("formData:",formData);
        // alert(JSON.stringify(formData, null, 1));

        const checkErrorState = Object.keys(booking.errors).every((key) => {
            return booking.errors[key].length === 0;
        });
        const checkBookingState = Object.keys(formData).every((key) => {
            return formData[key].length > 0;
        });

        // console.log(checkErrorState, checkBookingState);
        if (checkErrorState && checkBookingState) {
            await submitAPI(formData);
            await handleClear();
            navigateAPI();
        } else {
            console.log({ message: "Must fill all fields!" });
        }
    }

    const occasion = [
        { occasion: "Select occasion", value: "" },
        { occasion: "Anniversary", value: "anniversary" },
        { occasion: "Birthday", value: "birthday" }
    ]

    return (
        <>
            <form onSubmit={handleSubmit}>
                <section className="form-section">
                    {/* Date */}
                    <div className="label-input">
                        <label htmlFor="res-date">Choose date<span className="mandatory">*</span></label>
                        <input type="date" id="res-date"
                            name="date"
                            value={booking.date}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required aria-required="true"
                            aria-label="On Click"
                        />
                        {booking.touched.date && booking.errors.date ? (
                            <div className="errors">{booking.errors.date}</div>
                        ) : null}
                    </div>

                    {/* Time */}
                    <div className="label-input">
                        <label htmlFor="res-time">Choose time<span className="mandatory">*</span></label>
                        <select id="res-time"
                            name="time"
                            value={booking.time}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required aria-required="true"
                            aria-label="On Click"
                        >
                            <option value="">Select option</option>
                            {availableTimes.map((time) => (
                                <option key={time} value={time}>{time}</option>
                            ))}
                        </select>
                        {booking.touched.time && booking.errors.time ? (
                            <div className="errors">{booking.errors.time}</div>
                        ) : null}
                    </div>

                    {/* Guests */}
                    <div className="label-input">
                        <label htmlFor="guests">Number of guests<span className="mandatory">*</span></label>
                        <input type="text" id="guests" placeholder="1"
                            name="guests"
                            value={booking.guests}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required aria-required="true"
                            aria-label="On Click"
                        />
                        {booking.touched.guests && booking.errors.guests ? (
                            <div className="errors">{booking.errors.guests}</div>
                        ) : null}
                    </div>

                    <div className="label-input">
                        {/* Occasion */}
                        <label htmlFor="occasion">Occasion<span className="mandatory">*</span></label>
                        <select id="occasion"
                            name="occasion"
                            value={booking.occasion}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required aria-required="true"
                            aria-label="On Click"
                        >
                            {occasion.map((occasion) => (
                                <option key={occasion.value} value={occasion.value}>{occasion.occasion}</option>
                            ))}
                        </select>
                        {booking.touched.occasion && booking.errors.occasion ? (
                            <div className="errors">{booking.errors.occasion}</div>
                        ) : null}
                    </div>
                    {/* <div> */}
                    {isLoading ? <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    /> :
                        <button type="submit">Book Now</button>
                    }
                    {/* </div> */}
                </section>
            </form>
        </>
    )
}

export default BookingForm;