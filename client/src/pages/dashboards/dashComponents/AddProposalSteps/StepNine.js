import { TextField, Button } from "@mui/material";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";


// FORM VALIDATION FRONTEND
const stepNineValidationSchema = Yup.object({
  who_we_are: Yup.string().required().label("Who We Are"),
  vision_and_mission: Yup.string().required().label("Vision And Mission"),
  track_record: Yup.string().required().label("Track Record"),
});

const StepNine = ({ data, previousStep, next }) => {

  const formik = useFormik({
    initialValues: {
      who_we_are: data.who_we_are,
      vision_and_mission: data.vision_and_mission,
      track_record: data.track_record,
    },
    validationSchema: stepNineValidationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      next(values, true);
    },
  });

  return (
    <div>
      <p>{"Page 9 of 9"}</p>
      <Formik
        validationSchema={stepNineValidationSchema}
        initialValues={data}
      >
        {({ values }) => (
          <Form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="who_we_are"
              name="who_we_are"
              label="Who We Are"
              placeholder=''
              multiline
              value={formik.values.who_we_are}
              onChange={formik.handleChange}
              error={formik.touched.who_we_are && Boolean(formik.errors.who_we_are)}
              helperText={formik.touched.who_we_are && formik.errors.who_we_are}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="vision_and_mission"
              name="vision_and_mission"
              label="Vision And Mission"
              placeholder=''
              multiline
              value={formik.values.vision_and_mission}
              onChange={formik.handleChange}
              error={formik.touched.vision_and_mission && Boolean(formik.errors.vision_and_mission)}
              helperText={formik.touched.vision_and_mission && formik.errors.vision_and_mission}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="track_record"
              name="track_record"
              label="Track Record"
              placeholder=''
              multiline
              value={formik.values.track_record}
              onChange={formik.handleChange}
              error={formik.touched.track_record && Boolean(formik.errors.track_record)}
              helperText={formik.touched.track_record && formik.errors.track_record}
            />
            <br />
            <br />
            <Button
              id='next'
              variant="contained"
              size='large'
              type='button'
              color='primary'
              onClick={() => previousStep(values)}
            >
              Back
            </Button>
            <Button
              id='next'
              variant="contained"
              size='large'
              type='submit'
              color='primary'
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StepNine;