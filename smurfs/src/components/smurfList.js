import React from "react";
import { connect } from "react-redux";
import { fetchSmurf } from "../state/actionCreators";
import styled from "styled-components";

function SmurfList(props) {
  console.log(props);

  function getSmurf(e) {
    e.preventDefault();
    props.fetchSmurf();
  }
  return (
    <TestDiv>
      <button className="button" onClick={getSmurf}>FETCH SMURFS</button>

      <div>
        {props.smurf.data.map(char => (
          <div key={char.id}>
            <span>
              {" "}
              NAME: {char.name} AGE: {char.age} HEIGHT: {char.height}
            </span>
          </div>
        ))}
      </div>
    </TestDiv>
  );
}

const TestDiv = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: whitesmoke;
  margin-top: 30px;
  align-items: center;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

`;

export default connect(
  state => state,
  { fetchSmurf }
)(SmurfList);
