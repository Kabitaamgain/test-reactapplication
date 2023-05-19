import React, { useEffect, useState } from "react";
import Button from "../components/shared/Button";
const Hookspage=()=>{
    const [count, setCount]= useState(20);
    const[inputNumber, setInputNumber]=useState();

    const increasebuttonClick=()=>{
        setCount((count)=>count+2);
       

    };

    console.log(count);

    useEffect(()=>{
        setCount(22);
    },[]);

    const decreasebuttonClick=()=>{
        setCount((count)=>count-2);


    };
 

    const inputbuttonClick=()=>{
        setCount((count)=>count+parseInt(inputNumber));
    
    };
    const handleInputChange = (e) => {
        setInputNumber(e.target.value);
      };
    

    return(
        <div>
        <div className="text-center">
            <h1 className="font-medium text-4xl m-auto">useState</h1>
            <p className="mt-10 text-2xl">The value of count is {count}</p>
            <div className="flex gap-20 ml-64 my-10 justify-center">
                
            <Button
        title="Increase Count"
        onClick={increasebuttonClick}
        />
         <Button
        title="Decrease Count"
        onClick={decreasebuttonClick}
        />
            </div>

            <input type="number"value={inputNumber} onChange={handleInputChange} className="border-2 rounded-sm p-1.5 mb-10" />
    
            <Button
        title="Increase by Input number"
        onClick={inputbuttonClick}
        />
            </div>

            <form action=""  className="h-96 w-72 mt-10 mb-28 mx-auto bg-[darkgrey] text-center">
                <h1 className="font-medium text-4xl mb-5">Login Form</h1>
                <input type="text" name="name" placeholder="Name" className="border-2 rounded-sm p-1.5 m-2"/>
                <input type="email" name="email" placeholder="Email" className="border-2 rounded-sm p-1.5 m-2" />
                <input type="text" name="age" placeholder="Age" className="border-2 rounded-sm p-1.5 m-2" />
                <input type="password" name="password" placeholder="Password" className="border-2 rounded-sm p-1.5 m-2" />
            <Button 
             title="Submit"
             />
            </form>
        </div>
    )

}
export default Hookspage;