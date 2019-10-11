import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../state/actionCreators";

function AddSmurf(props) {
  //console.log(props);
  const [user, setUser] = useState({
    name: "",
    age: "",
    height: ""
  });

  function inputChange(e) {
    return setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  function submitForm(e) {
    e.preventDefault();
    props.addSmurf(user);
    return setUser({
      name: "",
      age: "",
      height: ""
    });
  }

  return (
    <div>
      <div>
        <h3>Add Your Favorite Smurf!</h3>
      </div>

      <form onSubmit={submitForm}>
        <label>
          Smurf Name:
          <br />
          <input
            className="label"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={inputChange}
          />
        </label>
        <br />
        <label>
          Smurf Age:
          <br />
          <input
            className="label"
            name="age"
            placeholder="Age"
            value={user.age}
            onChange={inputChange}
          />
        </label>
        <br />
        <label>
          Smurf Height:
          <br />
          <input
            className="label"
            name="height"
            placeholder="Height"
            value={user.height}
            onChange={inputChange}
          />
        </label>
        <br />
        <div>
          <button className="button" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default connect(
  state => state,
  { addSmurf }
)(AddSmurf);
