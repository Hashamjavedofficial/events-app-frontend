import React, {Fragment, useState} from "react";
import { useSelector } from "react-redux";
import {Button, TextField,Typography} from '@material-ui/core'
import {useDispatch} from "react-redux";
import * as Actions from '../store/AllActions'

import EventSummary from "../components/Events/event-summary";
import EventLogistics from "../components/Events/event-logistics";
import EventContent from "../components/Events/event-content";
import Spinner from "../components/Shared/Spinner";
import avatar from "../assets/avatar.jpg";
import AthleteList from '../components/Athlete/event-list'

import Athlete from "./Athlete";

// import ErrorAlert from "../components/ui/error-alert";

const SelectedEvent = (props) => {
  const dispatch = useDispatch()
  const [result,setResult] = useState("")
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
            sport={selectedEvent.sport}
          />
          <EventContent>
            <p>{selectedEvent.description}</p>
          </EventContent>
          <EventContent>
            <Typography variant={"h3"} component={"h3"} color={"secondary"}>Event Result</Typography>
            <p>{selectedEvent.result}</p>
          </EventContent>
          <div className='m-6'>
            <div className="m-6 flex justify-center gap-6">
              <div>
                <TextField
                    id="add-result"
                    label="Result"
                    name="result"
                    onChange={(e)=>setResult(e.target.value)}
                    multiline
                    rows={4}
                    value={result}
                    variant="outlined"
                />
              </div>
              <div><Button color={"primary"} variant={"contained"} onClick={()=>{
                dispatch(Actions.addResult({result,_id:selectedEvent._id}))
                setResult('')
              }}>Add Result</Button></div>
            </div>
            <div>
              {selectedEvent.athletes.length > 0 && <AthleteList items={selectedEvent.athletes} investigation={false} disbaleButtons={true} />}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SelectedEvent;
