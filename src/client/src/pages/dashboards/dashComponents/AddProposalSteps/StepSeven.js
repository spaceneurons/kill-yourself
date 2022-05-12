import { TextField, Button } from "@mui/material";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";

// FORM VALIDATION FRONTEND
const stepSevenValidationSchema = Yup.object({
  finance_plan: Yup.string().required().label("Finance Plan"),
  business_plan: Yup.string().required().label("Business Plan"),
});

const StepSeven = ({ data, previousStep, next }) => {

  const formik = useFormik({
    initialValues: {
      finance_plan: data.finance_plan,
      business_plan: data.business_plan,
    },
    validationSchema: stepSevenValidationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      next(values);
    },
  });


  return (
    <div>
      <p>{"Page 7 of 9"}</p>
    <Formik
      validationSchema={stepSevenValidationSchema}
      initialValues={data}
    >
      {({ values }) => (
          <Form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="finance_plan"
              name="finance_plan"
              label="Finance Plan"
              placeholder=''
              multiline
              value={formik.values.finance_plan}
              onChange={formik.handleChange}
              error={formik.touched.finance_plan && Boolean(formik.errors.finance_plan)}
              helperText={formik.touched.finance_plan && formik.errors.finance_plan}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="business_plan"
              name="business_plan"
              label="Business Plan"
              placeholder=''
              multiline
              value={formik.values.business_plan}
              onChange={formik.handleChange}
              error={formik.touched.business_plan && Boolean(formik.errors.business_plan)}
              helperText={formik.touched.business_plan && formik.errors.business_plan}
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
  );
};

export default StepSeven;
