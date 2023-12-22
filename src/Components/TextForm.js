import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("Enter text here");
  // UPPERCASE FUNCTION

  console.log();
  const HandleupCase = () => {
    //     console.log("Button was clicked ");
    settext(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };

  const Handleonchange = (event) => {
    //     console.log("On change");
    settext(event.target.value);
  };

  // LOWERCASE FUNCTION

  const HandlelowCase = () => {
    settext(text.toLowerCase());
    props.showAlert("Converted to Lowercase", "success");
  };

  // ALTERNATE FUNCTION

  const Handletoalter = () => {
    let alternatingValue = "";

    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        alternatingValue += text[i].toUpperCase();
      } else {
        alternatingValue += text[i].toLowerCase();
      }
    }
    settext(alternatingValue);
    props.showAlert("Converted to Alernate", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <label htmlFor="My box" className="form-label"></label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={Handleonchange}
            rows="3"
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "dark",
              color: props.mode === "dark" ? "black" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={HandleupCase}
        >
          Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={HandlelowCase}
        >
          Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={Handletoalter}
        >
          Alternate
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          word and <b>{text.length}</b> characters
        </p>
        <p>
          <b>
            {0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length}
          </b>{" "}
          Minutes read
        </p>
      </div>
    </>
  );
}
