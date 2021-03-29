import React from "react";
import { Button, IconButton } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import classes from "./event-item.module.css";

import imageLogo from "../../assets/images/coding-event.jpg";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const history = useHistory();

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");

  const exploreEventHandler = () => {
    history.push("/event/" + id);
  };

  return (
    <li className={classes.item}>
      <img src={imageLogo} alt={title} width={250} height={160} />
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
          <IconButton color={"primary"}>
            <DeleteIcon></DeleteIcon>
          </IconButton>
          <IconButton color={"primary"}>
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
