import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [mydata, setMydata]=useState([]);
    const loadData=()=>{
        let api="http://localhost:3000/Data";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.rollno}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h1>Display Page</h1>
        <table border={2}>
            <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Display;