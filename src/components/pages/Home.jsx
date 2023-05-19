import React from 'react';
import Button from '../shared/Button';
import { Card } from '../shared/Card';
import * as Images from "../../assets/images";


const Home=()=>{
    return(
        <>
        <div className="main-section">
        <div className='content'>
        <h1 className='text-red-500'>This is Home page.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore assumenda earum quo vero enim tenetur commodi placeat rem, laudantium dicta impedit quibusdam magni ipsum accusamus aperiam, iusto vel iure error?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore assumenda earum quo vero enim tenetur commodi placeat rem, laudantium dicta impedit quibusdam magni ipsum accusamus aperiam, iusto vel iure error?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore assumenda earum quo vero enim tenetur commodi placeat rem, laudantium dicta impedit quibusdam magni ipsum accusamus aperiam, iusto vel iure error?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore assumenda earum quo vero enim tenetur commodi placeat rem, laudantium dicta impedit quibusdam magni ipsum accusamus aperiam, iusto vel iure error?</p>
        </div>
        <img src={Images.Image1}alt="" className='image'/>
        </div>
        
        <Button
        title="Click Home Button"
        onClick={() => alert("Click Home Button")}
      />     
      <Button
      title="Click "
      onClick={() => alert("Click Button")}
      variant="danger"
    />
   
     

     
     <div className='card-pages'>
     <Card imgSrc={Images.Image1} 
     imgAlt="Card image" 
     title="Photography"
     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore assumenda earum quo vero enim tenetur commodi placeat rem, laudantium dicta impedit quibusdam magni ipsum accusamus aperiam, iusto vel iure error?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore assumenda earum quo vero enim tenetur commodi placeat rem, laudantium dicta impedit quibusdam magni ipsum accusamus aperiam, iusto vel iure error?"
      link="https://photographylife.com/what-is-photography"
      />
     <Card imgSrc={Images.Image4} 
     imgAlt="Home decoration" 
     title="Home Decoration"
     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore assumenda earum quo vero enim tenetur commodi placeat rem, laudantium dicta impedit quibusdam magni ipsum accusamus aperiam, iusto vel iure error?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore assumenda earum quo vero enim tenetur commodi placeat rem, laudantium dicta impedit quibusdam magni ipsum accusamus aperiam, iusto vel iure error?"
      link="https://www.houseandgarden.co.uk/topic/decoration"
      />
     <Card imgSrc={Images.Image2} 
     imgAlt="image" 
     title="Laptop"
     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore assumenda earum quo vero enim tenetur commodi placeat rem, laudantium dicta impedit quibusdam magni ipsum accusamus aperiam, iusto vel iure error?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore assumenda earum quo vero enim tenetur commodi placeat rem, laudantium dicta impedit quibusdam magni ipsum accusamus aperiam, iusto vel iure error?"
      link="https://www.amazon.com/Notebooks-Laptop-Computers/b?ie=UTF8&node=565108"
      
      />
       
      </div>
        </>
        
    )
};

export default Home;