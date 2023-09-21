import { useFormik } from "formik";

export function FormikDemo() {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Age: 0,
      Mobile: "",
      City: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
        <h3>Register User - Formik Form</h3>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input type="text" name="Name" onChange={formik.handleChange} />
          </dd>
          <dt>Age</dt>
          <dd>
            <input type="text" name="Age" onChange={formik.handleChange} />
          </dd>
          <dt>Mobile</dt>
          <dd>
            <input type="text" name="Mobile" onChange={formik.handleChange} />
          </dd>
          <dt>City</dt>
          <dd>
            <select name="City" onChange={formik.handleChange}>
              <option value="-1">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Hyd">Hyd</option>
            </select>
          </dd>
        </dl>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
