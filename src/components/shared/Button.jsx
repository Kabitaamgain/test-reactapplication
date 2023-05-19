import React from "react";
export const Button = ({type = "button", title, onClick, variant = "default" }) => {

    return(
        <>
    <button 
      type={type}
      onClick={onClick}
      className={`button ${
        variant === "primary" ? "primary" : variant === "danger" ? "danger" : ""
      }`}
    >
      {title}
    </button>
        </>

    );
} 
export default Button;