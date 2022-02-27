import React from "react";

function Form(props){
    return(
        <div className="form">
            <form onSubmit={props.handleSubmit}>
                <input type="text"
                    name="name"
                    autoComplete="off" 
                    required 
                      
                    onChange={props.handleChange}
                />
                <label htmlFor="name" className="label-name">
                    <span className="content-name">Username</span>
                </label>
                
            </form>
        </div>
    )
}

export default Form;