import React from 'react';
import Button from '../shared/Button';
import * as Images from "../../assets/images";
const About=()=>{
    return(
        <>
         <div className='main-section'>
            <div>
         <h1 className='heading1'>This is About Us page.</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis animi totam quisquam consectetur. Nihil illo voluptas, vitae blanditiis id veniam repellat officiis natus rem. Excepturi, qui molestias. Molestias, dolor illum.</p>
    </div>
        <img src={Images.Image2} alt="picture" className='image'/>
        </div>
        <Button name="Click About"/>
      
        </>
    )
};
export default About;