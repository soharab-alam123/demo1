import React, { useState } from "react";

const App = () =>{
const [name, setName]= useState("");
const [fullName, setFULLName]= useState();

const inputEvent =(event) =>{
    console.log(event.target.value);
    setName(event.target.value);
};
const onSubmit = () =>{
    setFULLName(name);
}
    return (
<>
    <div>
        <h1>Hello {fullName}</h1>
        <input type="text" placeholder="Enter your Name" onChange={inputEvent}></input>
        <button onClick={onSubmit}>click me</button>
    </div>
</>
    );
};

export default App; 