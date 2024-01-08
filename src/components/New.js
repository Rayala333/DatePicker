import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const New = () => {
    const date = new Date()
    const [value,setValue]=useState(null)

    const [user,setUser] = useState({
        name:"",
        date:""
    })

    const maxDate = new Date();
    maxDate.setDate(date.getDate() + 60);


    const months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]


    const dateFormate = (date)=>{
        if(date){
            return date.getFullYear() + '/' + date.getDate() + '/' + months[ date.getMonth()]
        }
    }

    const changeDate = (date)=>{
            console.log(date)
            setValue(date)
            // setUser({ ...user, date: date });
            const editDate = date===null ? "": dateFormate(date)
            console.log(editDate,"edited")
            setUser({ ...user, date: editDate });
    } 

    const changeHandler = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        
       console.log(user)
    }

     
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type='text' name='name' value={user.name} onChange={changeHandler} /><br/><br/>
        <DatePicker 
            name='date'
            selected={value}
            onChange={(date)=>changeDate(date)}
            placeholderText='YYYY/MM/DD'
            dateFormat='dd/MM/yyyy'
            showIcon
            minDate={date}
            maxDate={maxDate}
            isClearable
            filterDate={date=>date.getDay()!==6 && date.getDay()!==0}
        />
        <input type='submit' value='submit' />
        </form>
    </div>
  )
}

export default New