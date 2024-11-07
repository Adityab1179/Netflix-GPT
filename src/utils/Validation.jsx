import React from 'react'

const Validation = (email,password,name) => {
    const checkEmail=/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email)
    const checkPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!checkEmail) return "Email address is not valid"
    if(!checkPassword) return "Password is not valid"
    return null;
}

export default Validation