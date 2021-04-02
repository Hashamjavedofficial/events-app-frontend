import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import EventSummary from "../components/Athlete/event-summary";
import EventLogistics from "../components/Athlete/event-logistics";
import EventContent from "../components/Athlete/event-content";
import Spinner from "../components/Shared/Spinner";
import avatar from "../assets/avatar.jpg";
// import ErrorAlert from "../components/ui/error-alert";

const SelectedEvent = (props) => {
  const { selectedAthlete } = useSelector((state) => state.athletes);

  return (
    <Fragment>
      {Object.keys(selectedAthlete).length < 1 ? (
        <Spinner open />
      ) : (
        <Fragment>
          <EventSummary title={selectedAthlete.name} />
          <EventLogistics
            date={selectedAthlete.eventDate}
            country={selectedAthlete.country}
            image={
              selectedAthlete.athleteImage
                ? selectedAthlete.athleteImage
                : avatar
            }
            sport={selectedAthlete.sport}
          />
          <EventContent>
            <p>{selectedAthlete.description}</p>
          </EventContent>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SelectedEvent;
