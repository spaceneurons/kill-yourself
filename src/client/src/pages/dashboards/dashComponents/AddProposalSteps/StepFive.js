import { TextField, Button } from "@mui/material";
import { Form, Formik, useFormik } from "formik";
import * as Yup from 'yup'


// FORM VALIDATION FRONTEND
const stepFiveValidationSchema = Yup.object({
  key_partners: Yup.string().required().label('Key Partners'),
  stakeholders: Yup.string().required().label('Stakeholders'),
  networks: Yup.string().required().label('Netwokrs')
});

const StepFive = ({ data, previousStep, next }) => {

  const formik = useFormik({
    initialValues: {
      key_partners: data.key_partners,
      stakeholders: data.stakeholders,
      networks: data.networks,
    },
    validationSchema: stepFiveValidationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      next(values)
    },
  });

  return (
    <div>
      <p>{`Page 5 of 9`}</p>
      <Formik
        validationSchema={stepFiveValidationSchema}
        initialValues={data}
      >
        {({ values }) => (
          <Form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="key_partners"
              name="key_partners"
              label="Key Partners"
              placeholder=''
              multiline
              value={formik.values.key_partners}
              onChange={formik.handleChange}
              error={formik.touched.key_partners && Boolean(formik.errors.key_partners)}
              helperText={formik.touched.key_partners && formik.errors.key_partners}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="stakeholders"
              name="stakeholders"
              label="Stakeholders"
              placeholder=''
              multiline
              value={formik.values.stakeholders}
              onChange={formik.handleChange}
              error={formik.touched.stakeholders && Boolean(formik.errors.stakeholders)}
              helperText={formik.touched.stakeholders && formik.errors.stakeholders}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="networks"
              name="networks"
              label="Networks"
              placeholder=''
              multiline
              value={formik.values.networks}
              onChange={formik.handleChange}
              error={formik.touched.networks && Boolean(formik.errors.networks)}
              helperText={formik.touched.networks && formik.errors.networks}
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
};

export default StepFive
