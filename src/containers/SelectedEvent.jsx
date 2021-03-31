import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import EventSummary from "../components/Events/event-summary";
import EventLogistics from "../components/Events/event-logistics";
import EventContent from "../components/Events/event-content";
import Spinner from "../components/Shared/Spinner";
import avatar from "../assets/avatar.jpg";
// import ErrorAlert from "../components/ui/error-alert";

const SelectedEvent = (props) => {
  const { selectedEvent } = useSelector((state) => state.events);

  return (
    <Fragment>
      {Object.keys(selectedEvent).length < 1 ? (
        <Spinner open />
      ) : (
        <Fragment>
          <EventSummary title={selectedEvent.title} />
          <EventLogistics
            date={selectedEvent.eventDate}
            address={selectedEvent.address}
            image={selectedEvent.eventImage ? selectedEvent.eventImage : avatar}
            imageAlt={selectedEvent.title}
          />
          <EventContent>
            <p>{selectedEvent.description}</p>
          </EventContent>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SelectedEvent;
