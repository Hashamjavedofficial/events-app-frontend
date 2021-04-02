import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import EventList from "../components/Athlete/event-list";
import EventsSearch from "../components/Athlete/events-search";
import Spinner from "../components/Shared/Spinner";
import * as Actions from "../store/AllActions";

const Athlete = (props) => {
  const dispatch = useDispatch();
  const { athletes } = useSelector((state) => state);
  useEffect(() => {
    dispatch(Actions.getAllAthletes());
  }, []);

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    // router.push(fullPath);
  }

  return (
    <Fragment>
      <Spinner open={athletes.loading} />
      <EventsSearch onSearch={findEventsHandler} />
      {athletes.allAthletes.length > 0 ? (
        <EventList items={athletes.allAthletes} />
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
