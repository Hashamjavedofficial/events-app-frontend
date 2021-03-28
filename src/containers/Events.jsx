import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
// import { useRouter } from 'next/router';
// import Head from 'next/head';

import EventList from "../components/Events/event-list";
import EventsSearch from "../components/Events/events-search";
import Spinner from "../components/Shared/Spinner";

const Events = (props) => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get("https://vue-http-b6550-default-rtdb.firebaseio.com/events.json")
      .then((res) => {
        let finalData = [];
        for (let key in res.data) {
          finalData.push({
            ...res.data[key],
            image: "../../assets/" + res.data[key].image,
          });
        }
        debugger;
        setEvents(finalData);
      });
  }, []);

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    // router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      {events.length > 0 ? (
        <EventList items={events} />
      ) : (
        <Spinner open={true} />
      )}
    </Fragment>
  );
};

// export async function getStaticProps() {
//     const events = await getAllEvents();
//
//     return {
//         props: {
//             events: events,
//         },
//         revalidate: 60
//     };
// }

export default Events;
