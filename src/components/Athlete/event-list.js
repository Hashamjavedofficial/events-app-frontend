import React from "react";

import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList(props) {
  const { items,investigation } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => {
        if( investigation){
          if(event.underInvestigation){
            return   <EventItem
                key={event._id}
                athlete={event}
                id={event._id}
                name={event.name}
                sport={event.sport}
                country={event.country}
                image={event.athleteImage}
            />
          }
        }else {
          return   <EventItem
              key={event._id}
              athlete={event}
              id={event._id}
              name={event.name}
              sport={event.sport}
              country={event.country}
              image={event.athleteImage}
          />
        }
      })}
    </ul>
  );
}

export default EventList;
