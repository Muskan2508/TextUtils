import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    //console.log("uppercase was clicked");
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase","success");

  }
  const handlelowClick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase","success");

  }
  const handleclearClick=()=>{
    let newtext="";
    setText(newtext);
    props.showAlert("Text cleared","success");

  }
  const handleOnChange=(event)=>{
    //console.log("one change");
       setText(event.target.value);}
  
    const [text,setText]=useState('Enter text here');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#189AB4':'white',color:'dark'?'white':'black'}}id="mybox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handlelowClick}>Convert to lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleclearClick}>clear text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the above textbox to preview it"}</p>
    </div>
    </>
  )
}