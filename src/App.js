import React from 'react';
import "./stylesheets/App.css";
import { useState } from "react";
import { marked } from 'marked';


function App() {


  // window.onload(
  //   setOutput(initialState)
  // )

  const initialState = `
  # Heading
  ## Heading
  ### Heading
  
  bold text : **bold**

  lists :
  1. Hello
  1. wordl
  1. world*
  
  [My twitter link](https://twitter.com/xaida02)

  block code : 
  \`\`\`
    let a = 1;
    let b = 2;
    console.log(a + b)
  \`\`\`

 

  Inline code : \`<div></div>\`

  image : ![image](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

  ` + " > Block Quotes!";

  const [text, setOutput] = useState(initialState);

  // window.onload(
  //   setOutput(initialState)
  // )

  // setOutput(initialState);

  const handleChange = (event) => {
    setOutput(event.target.value)
  };

  // const preview = document.getElementById("preview");
  // preview.innerHTML = marked.parse(initialState)
  // preview.innerHTML = marked.parse(text);


  return (
    <div className='display-text'>
      <textarea id="editor" value={text} onChange={handleChange}></textarea>
      <div className="preview-div">
        <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(text, {breaks: true})}}></div>
      </div>     
    </div>
  )
}

export default App;


