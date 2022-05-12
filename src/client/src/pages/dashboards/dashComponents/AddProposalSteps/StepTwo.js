import { Form, Formik, useFormik } from "formik";
import * as Yup from 'yup'
import { Button, TextField } from "@mui/material";


// FORM VALIDATION FRONTEND
const stepTwoValidationSchema = Yup.object({
  expected_result: Yup.string().required().label('Expected result'),
  social_returns: Yup.string().required().label('Social returns')
});

// COMPONENT 2
const StepTwo = ({ data, previousStep, next }) => {

  const formik = useFormik({
    initialValues: {
      expected_result: data.expected_result,
      social_returns: data.social_returns,
    },
    validationSchema: stepTwoValidationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      next(values)
    },
  });

  return (
    <div>
      <p>{`Page 2 of 9`}</p>
      <Formik
        validationSchema={stepTwoValidationSchema}
        initialValues={data}
      >
        {({ values }) => (
          <Form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="expected_result"
              name='expected_result'
              label="Expected Result"
              placeholder='What do you expect to achieve?'
              multiline
              value={formik.values.expected_result}
              onChange={formik.handleChange}
              error={formik.touched.expected_result && Boolean(formik.errors.expected_result)}
              helperText={formik.touched.expected_result && formik.errors.expected_result}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="social_returns"
              name='social_returns'
              label="Social Returns"
              placeholder='How will you impact the community?'
              multiline
              value={formik.values.social_returns}
              onChange={formik.handleChange}
              error={formik.touched.social_returns && Boolean(formik.errors.social_returns)}
              helperText={formik.touched.social_returns && formik.errors.social_returns}
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
    </div >
  )
}

export default StepTwo;