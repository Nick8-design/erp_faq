import React from "react";
import "./Contents.css"
import boxi from "../assets/boxgroup.png";
const Contents=()=>{
    return(
        <>
       
        <div id="nav-bar">
    <ul>
        <li><a href="#" >Dashboard</a></li>
        <li><a href="#">Socials</a></li>
    <li><a href="#">Message</a></li>
       <li><a href="#">Addmission</a></li>
       <li><a href="#">Academic</a></li>
       <li><a href="#">Repository</a></li>
       <li><a href="#">Financials</a></li>
       <li><a href="#">Timetable</a></li>
      <li><a href="#">Online Survey</a></li>
      <li><a href="#">Evaluations</a></li>
      <li><a href="#">Complaints</a></li>
      <li><a href="#" id="active">FAQs</a></li>
      <li><a href="#">Virtual Assistant</a></li>
      
    </ul>

    <div id="foot">@2025 Developed by DND</div>

        </div>
      
      

    <div id="cont1">
        <p >FAQs</p>

<div id="bcontent">
<p style={{color: "rgb(91, 91, 148)"}}>General Inquries</p>
<br/>
<input type="text" id="inq" name="inquries" placeholder="  who are viable to use the  Newportal"/>
<p style={{color: "rgb(91, 91, 148)"}}>Others</p>

<img  id="box" src={boxi} alt="box"/>
<p  style={{textAlign: "center",fontWeight: "bold"}}>No data</p>
<p style={{textAlign: "center"}}>No other faq found</p>
        </div>
    </div>







        </>
        
    )
}

export default Contents