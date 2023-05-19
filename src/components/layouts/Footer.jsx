import React from 'react';
import * as  Icons from "../../assets/icons";


const Footer=()=>{
    return(
        <div className="footer">
        <h1 className='text-3xl'>&copy copyright 2023</h1>
        <div className='flex justify-center'>
        <Icons.Twitter className='icon'/>
        <Icons.Instagram className='icon'/>
        </div>
        </div>
    );
};
export default Footer;