import { Form, Formik, useFormik } from "formik";
import * as Yup from 'yup'
import { Button, TextField } from "@mui/material";

// FORM VALIDATION FRONTEND
const stepThreeValidationSchema = Yup.object({
  key_activities: Yup.string().required().label('Key activities'),
  key_resources: Yup.string().required().label('Key Resources'),
  team: Yup.string().required().label('Team')
});

// COMPONENT
const StepThree = ({ data, previousStep, next }) => {

  const formik = useFormik({
    initialValues: {
      key_activities: data.key_activities,
      key_resources: data.key_resources,
      team: data.team,
    },
    validationSchema: stepThreeValidationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      next(values)
    },
  });

  return (
    <div>
      <p>{`Page 3 of 9`}</p>
      <Formik
        validationSchema={stepThreeValidationSchema}
        initialValues={data}
      >
        {({ values }) => (
          <Form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="key_activities"
              name="key_activities"
              label="Key Activities"
              placeholder='What will be you main activity?'
              multiline
              value={formik.values.key_activities}
              onChange={formik.handleChange}
              error={formik.touched.key_activities && Boolean(formik.errors.key_activities)}
              helperText={formik.touched.key_activities && formik.errors.key_activities}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="key_resources"
              name="key_resources"
              label="Key Resources"
              placeholder='What are you must haves?'
              multiline
              value={formik.values.key_resources}
              onChange={formik.handleChange}
              error={formik.touched.key_resources && Boolean(formik.errors.key_resources)}
              helperText={formik.touched.key_resources && formik.errors.key_resources}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="team"
              name="team"
              label="Team"
              placeholder='Tell us about your team.'
              multiline
              value={formik.values.team}
              onChange={formik.handleChange}
              error={formik.touched.team && Boolean(formik.errors.team)}
              helperText={formik.touched.team && formik.errors.team}
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
}

export default StepThree;