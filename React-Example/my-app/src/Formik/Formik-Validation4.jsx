import { useState, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export function FormikValidation4() {
  return (
    <div className="container-fluid">
      <Formik
        initialValues={{
          UserName: "",
          Age: "",
          Mobile: "",
          City: "",
        }}
        validationSchema={yup.object({
          UserName: yup
            .string()
            .required("Name Required")
            .min(4, "Name is too short"),
          Age: yup.number().required("Age Required"),
          Mobile: yup
            .string()
            .required("Mobile Required")
            .matches(/\+91\d{10}/, " +91 Invalid Mobile Number"),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        <form>
          <dl>
            <dt>User Name</dt>
            <dd>
              <Field type="text" name="UserName" />
            </dd>
            <dd className="text-danger">
              <ErrorMessage name="UserName" />
            </dd>
            <dt>Age</dt>
            <dd>
              <Field type="text" name="Age" />
            </dd>
            <dd className="text-danger">
              <ErrorMessage name="Age" />
            </dd>
            <dt>Mobile</dt>
            <dd>
              <Field type="text" name="Mobile" />
            </dd>
            <dd className="text-danger">
              <ErrorMessage name="Mobile" />
            </dd>
            <dt>City</dt>
            <dd>
              <Field as="select" nam="City">
                <option>Select City</option>
                <option>Hyd</option>
                <option>Delhi</option>
                <option>Odisha</option>
              </Field>
            </dd>
          </dl>
          <button type="submit">Submit</button>
        </form>
      </Formik>
    </div>
  );
}
