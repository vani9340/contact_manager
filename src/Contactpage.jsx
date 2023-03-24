// import { Checkbox } from "@material-ui/core";
// import Picker from './picker';
import React,{useState,useEffect}  from "react";
import Table from "./Table";
function Contactpage(){
 const[data,setdata] = useState([])
 const[query,setQuery] = useState("")
//  console.log(query)
console.log(data)
const search = (data)=>{
    console.log(data.filter((item)=> item.email.includes(query.trim())))
    return data.filter((item)=> item.email.includes(query.trim()))
}
 useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then((result)=>{
       result.json().then((resp)=>{
        setdata(resp)
       }) 
})
},[])
   
//   console.log(data)
console.log()
    return(
        <div>
            <div className="logo">
            <span className="text_logo">Logo</span> 
            <div>
                <p className="dashboard">Dashboard</p>
            </div>
            <div className="total_contacts"><p className="text_tc">Total contacts</p></div>
            <button className="logout"><i class="fa fa-sign-out" aria-hidden="true">Log out</i></button>
            </div>
            <div className="heading">
            <span className="contact_text">Total Contacts</span>
            
            <input className="search" placeholder="Search by Email Id....." type="text" onChange={(e)=> setQuery(e.target.value)} />
            <span className="user_name">name</span>
            <div className="post">Super Admin</div>
            </div>
            <div>
            <div>
            <input type="date" className="date" lable="select date"/>
            <span><button className="filter">filter</button></span>
            <span><button className="delete"><i class="fa fa-trash" aria-hidden="true"></i>delete</button></span>
            <span><button className="import"><i class="fa fa-download" aria-hidden="true"></i>import</button></span>
            <span><button className="export"><i class="fa fa-upload" aria-hidden="true"></i>export</button></span>
            

                <Table data={search(data)}/>
            </div>
            </div>

        </div>
    )
}
export default Contactpage