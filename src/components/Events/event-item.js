import React, { Fragment, useState } from "react";
import { Button, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import classes from "./event-item.module.css";
import { bufferToImage } from "../../utils/helpers";
import * as Actions from "../../store/AllActions";

import imageLogo from "../../assets/images/coding-event.jpg";
import avatar from "../../assets/avatar.jpg";
import Model from "../Shared/Model";
import CreateEventForm from "./CreateEventForm";

function EventItem(props) {
  const { title, image, date, location, id, event } = props;
  const history = useHistory();
  const { events } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const toggleModel = () => {
    setOpen(!open);
  };
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");

  const exploreEventHandler = () => {
    dispatch(Actions.setSelectedEvent(event));
    history.push("/event/" + id);
  };
  const handleEdit = () => {
    dispatch(Actions.setSelectedEvent(event));
    toggleModel();
  };
  const handleDelete = () => {};

  return (
    <li className={classes.item}>
      <Model open={open} setOpen={setOpen} title="Create an event">
        <CreateEventForm closeModal={toggleModel} edit={true} />
      </Model>
      <img src={image ? image : avatar} alt={title} width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <IconButton onClick={handleDelete} color={"primary"}>
            <DeleteIcon></DeleteIcon>
          </IconButton>
          <IconButton onClick={handleEdit} color={"primary"}>
            <EditIcon></EditIcon>
          </IconButton>

          <Button
            className="mt-1"
            color="secondary"
            variant="contained"
            onClick={exploreEventHandler}
          >
            Explore Event <ArrowForwardIcon></ArrowForwardIcon>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
