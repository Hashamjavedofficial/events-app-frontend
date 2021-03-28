import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import EventSummary from "../components/Events/event-summary";
import EventLogistics from "../components/Events/event-logistics";
import EventContent from "../components/Events/event-content";
import Spinner from "../components/Shared/Spinner";
// import ErrorAlert from "../components/ui/error-alert";

const SelectedEvent = (props) => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://vue-http-b6550-default-rtdb.firebaseio.com/events/${id}.json`
      )
      .then((res) => {
        setEvent({
          ...res.data,
        });
      });
  }, []);

  return (
    <Fragment>
      {Object.keys(event).length < 1 ? (
        <Spinner open />
      ) : (
        <Fragment>
          <EventSummary title={event.title} />
          <EventLogistics
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}
          />
          <EventContent>
            <p>{event.description}</p>
          </EventContent>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SelectedEvent;
