import { useEffect } from "react";
import { useState } from "react";
import "./courses.css"
import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';
const Courses = ({handleAdd}) => {
   const[courses,setCourses]=useState([])
  



   useEffect(()=>{
    fetch('./course.json')
    .then(res => res.json())
     .then(data => setCourses(data))
   },[])

 

    return (
        <div >
        <div className="container">
        {
            courses.map((course)=>(
                <div className="card-container " key={course.id}>
                    <img className=" img" src={course.img} alt="" />
                    <h1 className="title" >{course.title}</h1>
                    <p className="des">{course.description}</p>
                    <div className="info">
                    <FiDollarSign/>
                        <h2 className="infos">Price:{course.price}</h2>
                        <BsBook/>
                        <h2 className="infos">Credit:{course.duration}hr</h2>
                    </div>
                    <button onClick={()=>handleAdd(course)} className="btn">Select</button>
                </div>
            )
               
            )
         }
         
        </div>

        

        
        </div>
    );
};

export default Courses;