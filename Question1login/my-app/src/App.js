import './App.css';
import {React, useState} from 'react';
import axios from 'axios';

function App() {
  const [res, setRes] = useState({});
  const datapost = (e)=>{
    axios.post("https://dummyjson.com/auth/login", e )
    .then((response) =>{
      console.log(response);
    })
    .catch((error)=> {
      console.log(error);
    });
  }
  return (
    <form>
  <label>
    UserName:<input type="text" name="name" />
  </label>
  <label>
    Password:<input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
  );
}

export default App;
