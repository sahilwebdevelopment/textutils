import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  let output = document.querySelector(".output");
  function handleChange(event) {
    setText(event.target.value);
  }
  function handleUpClick() {
    if(text.trim()===""){
      props.showAlert("No text found","danger")
    }else{
      setText(text.toUpperCase());
      props.showAlert("Text has been converted to Uppercase successfully","success")
    }
  }
  function handleLoClick() {
    if(text.trim()===""){
      props.showAlert("No text found","danger")
    }else{
      setText(text.toLowerCase());
      props.showAlert("Text has been converted to Lowercase successfully","success")
    }
  }
  function clearText() {
    setText("");
    props.showAlert("Text has been cleared successfully","success")
  }
  function copyText() {
    if(text.trim()===""){
    props.showAlert("No text found","danger")
    }else{
    navigator.clipboard.writeText(text)
    props.showAlert("Text has been copied successfully","success")
    }
  }
  function RemoveExtraSpaces() {
    let regex = /\s+/g
    if([...text.matchAll(regex)].length===0){
      props.showAlert("No spaces found","danger")
    }else{
      if(text===" "){
        setText(text.trim())
      }else{
    setText(text.replace(regex," ").trim())
      }
    props.showAlert("Extra spaces have been removed successfully","success")
    }
  }

  function getEmail(event) {
    let regex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/gi;
    let emails = [...text.matchAll(regex)]
    if(emails.length===0){
      props.showAlert("No Emails have been found","danger")
    }else{
    let result = ""
    emails.forEach((email) => {
      output.innerHTML = result + "<li>"+email[0]+"</li>"
      result = output.innerHTML
    })
    props.showAlert("Emails have been extracted successfully","success")
  }
  }
  function accurate(element) {
    return element !== "." && element !== "" && element !== " "
  }
  return (
    <>
      <div className="container mb-3 my-5">
        <h1>{props.heading}</h1>
        <textarea
          maxLength="500"
          className="form-control"
          id="box"
          rows="8"
          value={text}
          onChange={handleChange}
          style={{color: props.mode==="dark"? "black":"white", backgroundColor: props.mode==="dark"? "white":"black"}}
        ></textarea>
        <button onClick={handleUpClick} style={{marginRight:  20, width: 200, height: 40}} className="btn btn-primary my-3">
          Convert To Uppercase
        </button>
        <button onClick={handleLoClick} style={{marginRight:  20, width: 200, height: 40}} className="btn btn-primary my-3">
          Convert To LowerCase
        </button>
        <button onClick={getEmail} style={{marginRight:  20, width: 200, height: 40}} className="btn btn-primary my-3">
          Extract Emails
        </button>
        <button onClick={RemoveExtraSpaces} style={{marginRight:  20, width: 200, height: 40}} className="btn btn-primary my-3">
        Remove Extra Spaces
        </button>
        <button onClick={copyText} style={{marginRight:  20, width: 200, height: 40}} className="btn btn-primary my-3">
        Copy Text
        </button>
        <button onClick={clearText} style={{marginRight:  20, width: 200, height: 40}} className="btn btn-primary my-3">
          Clear Text
        </button>
      </div>
      <div className="container">
        <h3>
          {text.trim()===""? "0":text.split(".").length} sentences {text===""? "0":text.split(" ").filter(accurate).length} words and{" "}
          {text.replace(/\s+/g, "").length} characters
        </h3>
        <div className="my-4">
          <h2>Output</h2>
          <p className="output">{text.trim()===""? "No Text":text}</p>
        </div>
      </div>
    </>
  );
}
