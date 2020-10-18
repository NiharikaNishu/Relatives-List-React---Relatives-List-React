import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
     const relatives = ["S, "n", "m"];
        return(
           <>
//write your code here
    <ol key = "relativeList">
        {
            relatives.map((relatives,index) => (
                <li key ={`relativeListItem${index + 1}`}>{relatives}</li>
            ))
        }
    </ol>
	</>
        )
    }
}


export default App;
