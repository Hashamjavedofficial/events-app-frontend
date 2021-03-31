import React, { useState } from "react";
import { Formik, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/moment";
import moment from "moment";

import ImageUpload from "../Shared/image-upload";
import { convertToFormData } from "../../utils/helpers";
import * as Actions from "../../store/AllActions";

const CreateEventForm = (props) => {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state);
  const { closeModal } = props;
  const [eventImage, setEventImage] = useState("");

  const submitHandler = (values, options) => {
    dispatch(
      Actions.createEvent(
        convertToFormData({
          ...values,
          eventDate: moment(values.date).format("MM/d/yyyy"),
          eventImage: eventImage,
        }),
        closeModal
      )
    );
  };
  const inputHandler = (id, photo, fileIsValid) => {
    setEventImage(photo);
  };
  return (
    <Formik
      initialValues={{
        sport: "",
        eventDate: "",
        title: "",
        description: "",
        address: "",
      }}
      onSubmit={(values, options) => submitHandler(values, options)}
    >
      {({ values, handleSubmit, setFieldValue }) => (
        <form action="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-center">
              <ImageUpload
                id={"image"}
                onInput={inputHandler}
                errorText={"Please provide an image."}
                imageUrl={""}
              />
            </div>
            <div>
              <FormControl variant="outlined" className="w-full">
                <InputLabel id="demo-simple-select-outlined-label">
                  Sports
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Age"
                  onChange={(e) => {
                    setFieldValue("sport", e.target.value);
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="soccer">Soccer</MenuItem>
                  <MenuItem value="tennis">Tennis</MenuItem>
                  <MenuItem value="cricket">Cricket</MenuItem>
                  <MenuItem value="basketball">BasketBall</MenuItem>
                  <MenuItem value="badminton">Badminton</MenuItem>
                  <MenuItem value="golf">Golf</MenuItem>
                  <MenuItem value="baseball">Baseball</MenuItem>
                  <MenuItem value="baseball">Baseball</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  id="event-date"
                  label="Select Date"
                  inputVariant="outlined"
                  format="MM/d/yyyy"
                  onChange={(value) => setFieldValue("eventDate", value)}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  emptyLabel="Select Date"
                  animateYearScrolling={true}
                  allowKeyboardControl={false}
                  autoOk={true}
                  className="w-full"
                />
              </MuiPickersUtilsProvider>
            </div>
            <div>
              <Field
                as={TextField}
                label="Address"
                name="address"
                type="text"
                required
                variant="outlined"
                className="w-full"
              />
            </div>
            <div>
              <Field
                as={TextField}
                label="Title"
                name="title"
                type="text"
                required
                variant="outlined"
                className="w-full"
              />
            </div>
            <div>
              <Field
                as={TextField}
                label="Description"
                name="description"
                type="text"
                required
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="flex justify-end gap-4">
              <Button
                color="primary"
                variant="contained"
                onClick={props.closeModal}
              >
                Cancel
              </Button>
              <Button color={"secondary"} variant={"contained"} type={"submit"}>
                Submit
              </Button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};
export default CreateEventForm;