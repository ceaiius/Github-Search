import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import Card from "./Card";
import logo from "./github.png";
import octocat from "./Octocat.png";

function App(){

    const [name, setName] = useState("");
    
    const [avatar, setAvatar] = useState("");
    const [userInput, setUserInput] = useState("");
    const [error,setError] = useState(null);
    

    useEffect(()=>{
        fetch("https://api.github.com/users/")
        .then(res=>res.json())
        .then(data => {
            setData(data);
        })
    }, [])

    const setData = ({name,avatar_url}) => {
        setName(name);
        setAvatar(avatar_url);
       
    }

    const handleSearch = (event) => {
        setUserInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://api.github.com/users/${userInput}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.message){
                setError(data.message)
            }else{
                setData(data)
                setError(null);
            }
            
        })
    }

    return (
        <div >
            <div className="bodyWrapper"><img className="logo" src={logo}/></div>
            
            <div className="search">
                
                <Form handleSubmit={handleSubmit} handleChange={handleSearch}  value={name} name={name}/>
                
            </div>
            {error ? (
                <div className="wrapper">
                    <h1 className="errorH1">{error}</h1>
                    <img className="octocat" src={octocat}/>
                </div>
                ) : (
                <div className="card">
                    <Card newPage={`https://github.com/${userInput}`} src={avatar} name={name}  />
            </div>)}
            
        </div>
    )
}
export default App;