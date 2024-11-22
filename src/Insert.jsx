import { useState } from "react";
import axios from "axios";
const Insert=()=>{
    const [input, setInput]=useState({});
     const hanleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput((values)=>({...values, [name]:value}))
        console.log(input);
     }
     const hanleSubmit=()=>{
        let api="http://localhost:3000/Data";
        axios.post(api, input).then((res)=>{
            alert("Data Save!!")
        })
     }
    return(
        <>
        <h1>Insert Pagr</h1>
        Enter Name : <input type="text" name="name" onChange={hanleInput} />
        <br /><br />
        Enter Rollno : <input type="text" name="rollno" onChange={hanleInput} />
        <br /><br />
        Enter City : <input type="text" name="city" onChange={hanleInput}/>
        <br /><br />
        Enter Fees : <input type="text" name="fees" onChange={hanleInput}/>
        <br /><br />
        <button onClick={hanleSubmit}>Data Save</button>
        </>
    )
}
export default Insert;