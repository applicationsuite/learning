import { useFormik } from "formik";
import * as yup from "yup";

export function FormikValidation3() {
  const formik = useFormik({
    initialValues: {
      UserName: "",
      Age: "",
      Number: "",
      City: "",
    },
    validationSchema:yup.object({
      UserName:yup.string().required("Name Requered").min (4,"Name too short.."),
      Age:yup.number().required("Age Required"),
      Mobile:yup.string().required("Mobile Required").matches(/\+91\d{10}/,"Invalid Mobile")
    }),
    onSubmit:(value)=>{
      alert(JSON.stringify(value));
    }
  });

  return (
    <div className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
        <h2>Register User</h2>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input
              type="text"
              {...formik.getFieldProps("UserName")}
              name="UserName"
            />
          </dd>
          <dd className="text-danger">{formik.errors.UserName}</dd>
          <dt>Age</dt>
          <dd>
            <input type="text" {...formik.getFieldProps("Age")} name="Age" />
          </dd>
          <dd className="text-danger">{formik.errors.Age}</dd>
          <dt>Mobile</dt>
          <dd>
            <input
              type="text"
              {...formik.getFieldProps("Mobile")}
              name="Mobile"
            />
          </dd>
          <dd className="text-danger">{formik.errors.Mobile}</dd>
          <dt>City</dt>
          <dd>
            <select name="City" {...formik.getFieldProps("City")}>
              <option value="-1">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Hyd">Hyd</option>
            </select>
          </dd>
          <dd className="text-danger">{formik.errors.City}</dd>
        </dl>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
