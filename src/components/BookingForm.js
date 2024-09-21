import React, {
    useState,
    // useReducer,
    // useEffect
} from "react";
// import { useFormik } from 'formik';

function BookingForm({ availableTimes, dispatch, submitForm }) {
    // console.log("availableTimes:", availableTimes, dispatch);

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
            }  else if (!/^[1-9]$|^10$/.test(value)) {  // Check if the value is between 1 and 10
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

    // useEffect(() => {
    //     console.log("triggered!");
    // }, [booking])

    const handleSubmit = (e) => {
        // const { name, value } = e.target;
        e.preventDefault();
        const { date, time, guests, occasion } = booking;
        const formData = { date, time, guests, occasion };
        // console.log(formData);
        alert(JSON.stringify(formData, null, 1));
        submitForm(formData);
    }

    const occasion = [
        { occasion: "Select occasion", value: "" },
        { occasion: "Anniversary", value: "anniversary" },
        { occasion: "Birthday", value: "birthday" }
    ]

    return (
        <>
            <form style={{ display: "grid", maxWidth: "200px", gap: "20px", border: "1px solid green" }}
                onSubmit={handleSubmit}
            >
                {/* Date */}
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date"
                    name="date"
                    value={booking.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {booking.touched.date && booking.errors.date ? (
                    <span>{booking.errors.date}</span>
                ) : null}

                {/* Time */}
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time"
                    name="time"
                    value={booking.time}
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <option value="">Select option</option>
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
                {booking.touched.time && booking.errors.time ? (
                    <span>{booking.errors.time}</span>
                ) : null}

                {/* Guests */}
                <label htmlFor="guests">Number of guests</label>
                <input type="text" id="guests" placeholder="1"
                    name="guests"
                    value={booking.guests}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {booking.touched.guests && booking.errors.guests ? (
                    <span>{booking.errors.guests}</span>
                ) : null}

                {/* Occasion */}
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion"
                    name="occasion"
                    value={booking.occasion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    {occasion.map((occasion) => (
                        <option key={occasion.value} value={occasion.value}>{occasion.occasion}</option>
                    ))}
                </select>

                {booking.touched.occasion && booking.errors.occasion ? (
                    <span>{booking.errors.occasion}</span>
                ) : null}

                <button type="submit">Book Now</button>
            </form>
        </>
    )
}

export default BookingForm;