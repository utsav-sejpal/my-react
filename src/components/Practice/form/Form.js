import React, { useState } from "react";

function FormValidationDemo(){
    const[formDate, setFormData]= useState ({email: "", password: ""});
    const[errors, setErrors] = useState({});

    const handleChang = (e) => {
        const {name, value} = e.target;

        // console.log(e.target);
        // console.log(formData, name, value);
        setFormData({...formDate, [name]: value});
        // Clear error message when user starts typing
        setErrors({...errors, [name]: ""});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const {email, password} = formDate;
        let errors = {};

        // Simple validation
        if (!email){
            errors.email = "Email Is Required";
        }
        if (!password){
            errors.password = "Password Is Required"
        }

        console.log(Object.keys(errors));
        if(Object.keys(errors).length > 0){
            setErrors(errors);
        }
        else{
            // Form submission logic
            console.log("Email:",formDate.email);
            console.log("password:", formDate.password)
        }
    };

    return(
        <div>
        <h2>login Form</h2>
        <form onSubmit={handleSubmit}>
        <div>
        <label>Email:</label>
        <input 
        type="email"
        name="email"
        value={formDate.email}
        onChange={handleChang}
        autoComplete="on"
        />
         {errors.email && <span style={{color: " greenyellow"}}>{errors.email}</span>}
        </div>

        <div>
            <label>Password:</label>
            <input 
            type="password" 
            name="password"
            value={formDate.password} 
            onChange={handleChang}
            autoComplete="on"
            />
            {errors.password && (<span style={{color: "greenyellow"}}>{errors.password}</span>
            )}
        </div>
        <button type="submit">Login</button>
        </form>
        </div>
    );
    
}

export default FormValidationDemo