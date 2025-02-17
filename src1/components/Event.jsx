import React from 'react'

const Event = (props) => {
    const month = props.month;
    const eventDays = ['14/2/2025']; // Array that should hold dates with events

    return (
        <>
          <div className={`cell ${eventDays.includes(props.date) ? "bg-slate-700 " : ""}`}>
            {props.date}
          </div>
        </>
    );
}

export default Event;
