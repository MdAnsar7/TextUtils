// import { eventWrapper } from "@testing-library/user-event/dist/utils";
// import React, { useState } from "react";
import React, { useState } from "react";

export default function TextForm(props) {
  
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };

  const handleCopy = () => {
    //  console.log('i am copy');
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    props.showAlert("every thing got selected", "success");
    // document.getSelection().removeAllRanges();
  };

  const handleExtraSpaces = () => {
    //  console.log('i am remove extra space ');
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed", "success");
  };

  const handleLoClick = () => {
    // console.log("lower acse was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };

  const handleClearClick = () => {
    // console.log("clear" + text);
    let newText = "";
    setText(newText);
    props.showAlert("All Text has been Clear and deleted ", "success");
  };
  // const handleUndoClick = () => {
  //   // console.log("clear" + text);
  //  let newText = text.lastIndexOf(" ");
  //  var str = Text.value.substr(0,newText);
  //  setText(str);

  // };

  const handleOnChange = (event) => {
    // console.log("Uppercase was on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setText("new text");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              color : props.mode === 'dark'? 'white' : 'black',
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            }}
            // style = {{color : props.mode === 'dark'? 'white' : '#042743'}}
            // style = {{color : props.mode === 'light'? '#042743' : 'white'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled = {text.length === 0} className="btn btn-primary" onClick={handleUpClick}>
          convert to upper case
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          convert to lower case
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear!
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        {/* <button className="btn btn-primary mx-1" onClick={handleUndoClick}>
          Undo
        </button> */}
      </div>
      <div className="container my-3 " style = {{color : props.mode === 'dark'? 'white' : 'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words,{text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} This Much Minutes It Take to
          read full passage..{" "}
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in textArea to preview it here!"}
        </p>
      </div>
    </>
  );
}
