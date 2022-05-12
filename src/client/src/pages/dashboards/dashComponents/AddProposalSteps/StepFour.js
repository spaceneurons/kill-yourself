import { TextField, Button } from "@mui/material";
import { Form, Formik, useFormik } from "formik";
import * as Yup from 'yup'


// FORM VALIDATION FRONTEND
const stepFourValidationSchema = Yup.object({
  client_profile: Yup.string().required().label('Client Profile'),
  client_relationships: Yup.string().required().label('Client Relationships'),
  client_channels: Yup.string().required().label('Client Channels')
});

// COMPONENT 2
const StepFour = ({ data, previousStep, next }) => {

  const formik = useFormik({
    initialValues: {
      client_profile: data.client_profile,
      client_relationships: data.client_relationships,
      client_channels: data.client_channels,
    },
    validationSchema: stepFourValidationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      next(values)
    },
  });

  return (
    <div>
      <p>{`Page 4 of 9`}</p>
      <Formik
        validationSchema={stepFourValidationSchema}
        initialValues={data}
      >
        {({ values }) => (
          <Form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="client_profile"
              name="client_profile"
              label="Client Profile"
              placeholder=''
              multiline
              value={formik.values.client_profile}
              onChange={formik.handleChange}
              error={formik.touched.client_profile && Boolean(formik.errors.client_profile)}
              helperText={formik.touched.client_profile && formik.errors.client_profile}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="client_relationships"
              name="client_relationships"
              label="Client Relationships"
              placeholder=''
              multiline
              value={formik.values.client_relationships}
              onChange={formik.handleChange}
              error={formik.touched.client_relationships && Boolean(formik.errors.client_relationships)}
              helperText={formik.touched.client_relationships && formik.errors.client_relationships}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="client_channels"
              name="client_channels"
              label="Client Channels"
              placeholder=''
              multiline
              value={formik.values.client_channels}
              onChange={formik.handleChange}
              error={formik.touched.client_channels && Boolean(formik.errors.client_channels)}
              helperText={formik.touched.client_channels && formik.errors.client_channels}
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
              Next
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
};

export default StepFour;
