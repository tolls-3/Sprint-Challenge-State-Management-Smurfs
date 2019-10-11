import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

function SmurfList(props) {
  console.log(props);

  function getSmurf(e) {
    e.preventDefault();
    props.fetchSmurf();
  } 
  return (
    <div>
      <button onClick={getSmurf}>FETCH POSTS</button>

      <div>{
          props.smurf.data.map(char => (
            <div key={char.id}>
              <div>
                <h3>
                  NAME:<span> {char.name}</span>
                </h3>
                <br></br>
                <span>AGE: {char.age} </span>
                <span>HEIGHT: {char.height}</span>
              </div>
            </div>
          ))
      }
      </div>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(SmurfList);
