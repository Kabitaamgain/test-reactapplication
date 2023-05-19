import React from "react";
// import { Link } from "react-router-dom";
import Button from "./Button";
export const Card=({imgSrc,imgAlt,title,description,link,button})=>{
    return(
        <div className="card-container">
       <img src={imgSrc} alt={imgAlt} className='image1'/>
       <h1 className="card-title">{title}</h1>
       <p className="card-description">{description}</p>
       {/* <Link to={link}><button className="primary">View more</button></Link> */}
       <a href={link} target="_blank" rel="noreferrer" >  <Button
      title="View more "
      onClick={() => alert("Click Button")}
      variant="primary"
    /></a>
        </div>
    );
};