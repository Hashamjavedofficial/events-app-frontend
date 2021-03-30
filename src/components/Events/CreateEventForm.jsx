import React from "react";
import { Formik, Field } from "formik";
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

const CreateEventForm = (props) => {
  const submitHandler = (values, options) => {
    console.log(values);
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
    >
      {({ values, handleSubmit, setFieldValue }) => (
        <form action="">
          <div className="grid grid-cols-1 gap-4">
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
                  onChange={(value) => setFieldValue("date", value)}
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
            <div className="flex justify-end">
              <Button color={"secondary"} variant={"contained"}>
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
