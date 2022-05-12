import { TextField, Button } from "@mui/material";
import { Form, Formik, useFormik } from "formik";
import * as Yup from 'yup'

// FORM VALIDATION FRONTEND
const stepSixValidationSchema = Yup.object({
  startup_costs: Yup.string().required().label('Startup Costs'),
  operational_costs: Yup.string().required().label('Operational Costs')
});

const StepSix = ({ data, previousStep, next }) => {


  const formik = useFormik({
    initialValues: {
      startup_costs: data.startup_costs,
      operational_costs: data.operational_costs,
    },
    validationSchema: stepSixValidationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      next(values)
    },
  });

  return (
    <div>
      <p>{`Page 6 of 9`}</p>
      <Formik
        validationSchema={stepSixValidationSchema}
        initialValues={data}
      >
        {({ values }) => (
          <Form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="startup_costs"
              name="startup_costs"
              label="Startup Costs"
              placeholder=''
              multiline
              value={formik.values.startup_costs}
              onChange={formik.handleChange}
              error={formik.touched.startup_costs && Boolean(formik.errors.startup_costs)}
              helperText={formik.touched.startup_costs && formik.errors.startup_costs}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="operational_costs"
              name="operational_costs"
              label="Operational Costs"
              placeholder=''
              multiline
              value={formik.values.operational_costs}
              onChange={formik.handleChange}
              error={formik.touched.operational_costs && Boolean(formik.errors.operational_costs)}
              helperText={formik.touched.operational_costs && formik.errors.operational_costs}
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

export default StepSix
