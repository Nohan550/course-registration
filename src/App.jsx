import Swal from 'sweetalert2'




import { useState } from 'react'
import './App.css'
import Carts from './components/cart/carts'
import Courses from './components/courses/courses'
import Header from './components/header/header'

function App() {
  const[selectCourse,setSelectCourses]=useState([]);
  const[remaining,setRemaining]=useState([0])
  const[total,setTotal]=useState([0])
  const[totalPrice,setTotalPrice]=useState([0])

  const handleAdd = (course) => {
    const doesExist = selectCourse.find((same) => same.id == course.id)
    let total = course.duration;
    let totalPrice = course.price
    if(doesExist){
      return Swal.fire(
        'Sorry!',
         'You have already added this',
         'warning'
       )
    }   
    
   else{

             selectCourse.forEach((item)=>{
              total = total  + item.duration
              totalPrice=totalPrice +item.price

             })
             const remaining =20 - total;
             if(total > 20){
                 return Swal.fire(
                  'Sorry!',
                   'Your Credit Limit is 20 ',
                   'error'
                 )
             }else{  
              setTotal(total)
              setRemaining(remaining)
              setTotalPrice(totalPrice)
            }
            
           
    const addedCourse =[...selectCourse,course]
    setSelectCourses(addedCourse)
   }
  }
  return (
    <div>
      <Header></Header>
      <div className='body'>
        <Courses handleAdd={handleAdd}></Courses>
      <Carts selectCourse={selectCourse} remaining={remaining} total={total} totalPrice={totalPrice}></Carts>
    
      </div>
    </div>
  )
}

export default App
