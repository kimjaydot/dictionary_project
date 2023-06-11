import React from "react";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return meaning.definitions[0].definition;
        })}
      </div>
    );
  } else {
    return null;
  }
}
