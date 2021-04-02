import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import EventList from "../components/Athlete/event-list";
import EventsSearch from "../components/Athlete/events-search";
import Spinner from "../components/Shared/Spinner";
import * as Actions from "../store/AllActions";

const Athlete = (props) => {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state);
  useEffect(() => {
    dispatch(Actions.getAllEvents());
  }, []);

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    // router.push(fullPath);
  }

  return (
    <Fragment>
      <Spinner open={events.loading} />
      <EventsSearch onSearch={findEventsHandler} />
      {events.allEvents.length > 0 ? (
        <EventList items={events.allEvents} />
      ) : (
        <div className="flex justify-center align-items-center">
          <div>
            <h2>No Record Found</h2>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Athlete;
