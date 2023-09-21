import { useState } from "react";

function ViewComponent(props) {
  return (
    <tr>
      <td>Your Name</td>
      <td>
        <label>{props.uname}</label>
      </td>
      <td>
        <button>Edit</button>
      </td>
    </tr>
  );
}
function EditComponent(props) {
  return (
    <tr>
      <td>Your Name</td>
      <td>
        <input type="text" value={props.uname} />
      </td>
      <td>
        <button>Save</button>
      </td>
    </tr>
  );
}

export function RenderDemo() {
  const [component, setComponent] = useState(<ViewComponent uname="John" />);

  function ViewClick() {
    setComponent(<ViewComponent uname="John" />);
  }
  function EditClick() {
    setComponent(<EditComponent uname="John" />);
  }

  return (
    <div className="container-fluid">
      <h3>
        User Details{" "}
        <button onClick={ViewClick} className="bi bi-eye-fill"></button>{" "}
        <button onClick={EditClick} className="bi bi-pen-fill"></button>{" "}
      </h3>
      <table className="table  w-50">
        <tbody>{component}</tbody>
      </table>
    </div>
  );
}
