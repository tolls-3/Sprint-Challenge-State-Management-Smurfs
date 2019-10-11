import React from "react";
import { connect } from "react-redux";
import { fetchSmurf } from "../state/actionCreators";

function SmurfList(props) {
  console.log(props);

  function getSmurf(e) {
    e.preventDefault();
    props.fetchSmurf();
  }
  return (
    <div>
      <button onClick={getSmurf}>FETCH POSTS</button>

      <div>
        {props.smurf.data.map(post => (
          <div key={post.id}>
            <span>
              {" "}
              NAME: {post.name} AGE: {post.age} HEIGHT: {post.height}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default connect(
  state => state,
  { fetchSmurf }
)(SmurfList);
