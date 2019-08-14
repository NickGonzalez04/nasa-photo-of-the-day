import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./Photocard.js";
import "./App.css";

function App() {
  const [data, setData] =useState({});
  console.log("top");
  useEffect(()=> {// lets us render sometimes 
    console.log("first render")
      axios.get("https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo")
    .then(res =>{
    console.log(res.data);
    setData(res.data);
  });
}, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <PhotoCard title={data.title} 
                  url={data.url}
                 explanation={data.explanation}/>
    </div>
  );
}

export default App;
