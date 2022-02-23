import React from "react";

function Form(props){
    return(
        <div className="form">
            <form onSubmit={props.handleSubmit}>
                <input type="text"
                    name="name"
                    autocomplete="off" 
                    required 
                      
                    onChange={props.handleChange}
                />
                <label for="name" className="label-name">
                    <span className="content-name">Username</span>
                </label>
                
            </form>
        </div>
    )
}

export default Form;