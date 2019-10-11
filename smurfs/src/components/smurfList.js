import React from "react";
import { connect } from "react-redux";
import { fetchSmurf, deleteSmurf } from "../state/actionCreators";
import styled from "styled-components";

function SmurfList(props) {
  console.log(props);

  function getSmurf() {
    props.fetchSmurf();
  }

  function delSmurf(e, id) {
    //debugger;
    e.preventDefault();
    //console.log(delSmurf(e,id))
    props.deleteSmurf(id);
  }

  return (
    <TestDiv>
      <button className="button" onClick={getSmurf}>
        FETCH SMURFS
      </button>

      <div>
        {props.smurf.data.map(char => (
          <div key={char.id}>
            NAME: {char.name} AGE: {char.age} HEIGHT: {char.height}
            <button
              onClick={function(e) {
                return delSmurf(e, char.id);
              }}
            >
              X
            </button>
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
  }
`;

export default connect(
  state => state,
  { fetchSmurf, deleteSmurf }
)(SmurfList);
