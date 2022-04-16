import { TextField, Button } from "@mui/material";
import { Form, Formik, useFormik } from "formik";
import * as Yup from 'yup'

// FORM VALIDATION FRONTEND
const stepEightValidationSchema = Yup.object({
  implementation_plan: Yup.string().required().label('Implementation Plan'),
  key_milestones: Yup.string().required().label('Key Milestones'),
  monitoring_and_evaluation: Yup.string().required().label('Monitoring and Evaluation'),
});

const StepEight = ({ data, previousStep, next }) => {

  const formik = useFormik({
    initialValues: {
      implementation_plan: data.implementation_plan,
      key_milestones: data.key_milestones,
      monitoring_and_evaluation: data.monitoring_and_evaluation,
    },
    validationSchema: stepEightValidationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      next(values)
    },
  });

  return (
    <div>
      <p>{`Page 8 of 9`}</p>
      <Formik
        validationSchema={stepEightValidationSchema}
        initialValues={data}
      >
        {({ values }) => (
          <Form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="implementation_plan"
              name="implementation_plan"
              label="Implementation Plan"
              placeholder=''
              multiline
              value={formik.values.implementation_plan}
              onChange={formik.handleChange}
              error={formik.touched.implementation_plan && Boolean(formik.errors.implementation_plan)}
              helperText={formik.touched.implementation_plan && formik.errors.implementation_plan}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="key_milestones"
              name="key_milestones"
              label="Key Milestones"
              placeholder=''
              multiline
              value={formik.values.key_milestones}
              onChange={formik.handleChange}
              error={formik.touched.key_milestones && Boolean(formik.errors.key_milestones)}
              helperText={formik.touched.key_milestones && formik.errors.key_milestones}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="monitoring_and_evaluation"
              name="monitoring_and_evaluation"
              label="Monitoring and Evaluation"
              placeholder=''
              multiline
              value={formik.values.monitoring_and_evaluation}
              onChange={formik.handleChange}
              error={formik.touched.monitoring_and_evaluation && Boolean(formik.errors.monitoring_and_evaluation)}
              helperText={formik.touched.monitoring_and_evaluation && formik.errors.monitoring_and_evaluation}
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

export default StepEight
