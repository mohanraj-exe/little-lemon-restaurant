import React from "react";
import { useFormik } from 'formik';

function BookingForm() {

    const availableTimes = [
        { time: "Select time", value: "" },
        { time: "17:00", value: "17:00" },
        { time: "18:00", value: "18:00" },
        { time: "19:00", value: "19:00" },
        { time: "20:00", value: "20:00" },
        { time: "21:00", value: "21:00"},
        { time: "22:00", value: "22:00" }
    ]

    const occasion = [
        { occasion: "Select occasion", value: "" },
        { occasion: "Anniversary", value: "anniversary" },
        { occasion: "Birthday", value: "birthday" }
    ]

    const { getFieldProps, handleSubmit } = useFormik({
        initialValues: {
            date: '',
            time: '',
            guests: '',
            occasion: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log("values:", values);
        }
    });

    return (
        <>
            <main>
                <form style={{ display: "grid", maxWidth: "200px", gap: "20px", border: "1px solid green" }}
                    onSubmit={handleSubmit}>
                    {/* Date */}
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" {...getFieldProps('date')} />

                    {/* Time */}
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" {...getFieldProps('time')} placeholder="time">
                        {availableTimes.map((time) =>(
                            <option key={time.value} value={time.value}>{time.time}</option>
                        ))}
                    </select>

                    {/* Guests */}
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" id="guests" placeholder="1" min={1} max={10}
                        {...getFieldProps('guests')} />


                    {/* Occasion */}
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" {...getFieldProps('occasion')}>
                        {occasion.map((occasion) =>(
                            <option key={occasion.value} value={occasion.value}>{occasion.occasion}</option>
                        ))}
                    </select>

                    <button type="submit">Submit</button>
                </form>
            </main>
        </>
    )
}

export default BookingForm;