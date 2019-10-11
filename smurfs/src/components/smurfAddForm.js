import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../state/actionCreators";

function AddSmurf(props) {
  //console.log(props);
  const [user, setUser] = useState({});

  function inputChange(e) {
    return setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  function submitForm(e){
    e.preventDefault();
    props.addSmurf(user);
    return setUser({
      name: "",
      age: "",
      height: ""
    });
  };

  return (
    <div>
      <div>
        <h3>Add Your Favorite Smurf!</h3>
      </div>

      <form onSubmit={submitForm}>
        <label> Smurf Name
          <input
            name="name"
            placeholder="Name"
            value={props.name}
            onChange={inputChange}
          />
        </label>
        <label> Smurf Age
          <input
            name="age"
            placeholder="Age"
            value={props.Age}
            onChange={inputChange}
          />
        </label>
        <label> Smurf Height
          <input
            name="height"
            placeholder="Smurf Height"
            value={props.height}
            onChange={inputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default connect(
  state => state,
  { addSmurf }
)(AddSmurf);
