import { useEffect } from "react";
import { useState } from "react";
import "./courses.css"
import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';
import Cart from "../cart/cart";
const Courses = () => {
   const[courses,setCourses]=useState([])

   useEffect(()=>{
    fetch('./course.json')
    .then(res => res.json())
     .then(data => setCourses(data))
   },[])

    return (
        <div className="flex mx-16 gap-6 text-center">
        <div className="grid grid-cols-3 gap-6">
        {
            courses.map((course)=>(
                <div className="w-80 bg-white rounded-xl p-4 " key={course.id}>
                    <img className="w-72 h-36 rounded-lg" src={course.img} alt="" />
                    <h1 className="text-lg font-semibold py-4" >{course.title}</h1>
                    <p className="text-sm font-normal">{course.description}</p>
                    <div className="flex  py-3 items-center justify-around">
                    <FiDollarSign/>
                        <h2 className="text-base font-medium">Price:{course.price}</h2>
                        <BsBook/>
                        <h2 className="text-base font-medium">Credit:{course.duration}hr</h2>
                    </div>
                    <button className=" mt-4 px-28 py-2 rounded-lg bg-blue-600 text-white text-center">Select</button>
                </div>
            )
               
            )
         }
         
        </div>

        <Cart></Cart>

        
        </div>
    );
};

export default Courses;