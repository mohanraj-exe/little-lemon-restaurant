import React, {
    useState,
    //  useReducer 
} from "react";

function BookingForm({ availableTimes, dispatch, updateTimes }) {
    console.log(updateTimes);
    const occasion = [
        { occasion: "Select occasion", value: "" },
        { occasion: "Anniversary", value: "anniversary" },
        { occasion: "Birthday", value: "birthday" }
    ]

    const [booking, setBooking] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: ''
    });

    const handleChange = (e) => {
        // console.log("e:", e.target.value, e.target.name)
        if (e.target.name === "date") {
            setBooking({ ...booking, [e.target.name]: e.target.value });
            dispatch({ type: "date", selectedDate: e.target.value });
        }
        setBooking({ ...booking, [e.target.name]: e.target.value });
    }

    // const [value, setValue] = useState(0);
    // let initialValue = 0;

    // const handleClick1 = () =>{
    //     // setValue(value + 1);
    //     dispatch({
    //         type: 'add'
    //     })

    // }
    // const handleClick2 = () =>{
    //     // setValue(value - 1);
    //     dispatch({
    //         type: 'subtract'
    //     })
    // }

    // const yourReducerFunction = (value, action) =>{
    //     if(action.type === 'add'){
    //         return value + 1
    //     } else if(action.type === 'subtract'){
    //         return value - 1
    //     } else {
    //         return value
    //     }
    // };

    // const [value, dispatch] = useReducer(yourReducerFunction, initialValue);

    return (
        <>
            {/* Value: {value}
            <button onClick={handleClick1}>+</button>
            <button onClick={handleClick2}>-</button>
            <br /> */}

            <form style={{ display: "grid", maxWidth: "200px", gap: "20px", border: "1px solid green" }}>
                {/* Date */}
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date"
                    name="date"
                    value={booking.date}
                    onChange={handleChange}
                />

                {/* Time */}
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time"
                    name="time"
                    value={booking.time}
                    onChange={handleChange}
                >
                    {availableTimes.map((time) => (
                        <option key={time.value} value={time.value}>{time.time}</option>
                    ))}
                </select>

                {/* Guests */}
                <label htmlFor="guests">Number of guests</label>
                <input type="number" id="guests" placeholder="1" min={1} max={10}
                    name="guests"
                    value={booking.guests}
                    onChange={handleChange}
                />

                {/* Occasion */}
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion"
                    name="occasion"
                    value={booking.occasion}
                    onChange={handleChange}
                >
                    {occasion.map((occasion) => (
                        <option key={occasion.value} value={occasion.value}>{occasion.occasion}</option>
                    ))}
                </select>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default BookingForm;