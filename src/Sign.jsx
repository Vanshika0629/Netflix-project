import React from 'react'
import Footer from "./Footer.jsx";
import Nav from "./Nav.jsx";
import style from "./css/Sign.module.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Sign() {
    const [mail,setmail] = useState("")
    const navigate = useNavigate();
    const checkLog=(e)=>{
        e.preventDefault()
        let data = {email:e.target.email.value,pass:e.target.password.value}
        //navigate("/home",{state:mail})
        fetch('http://127.0.0.1:3000/log',
    {
        method:"POST",headers:{
            'Content-Type':'application.json'
        },
        body:JSON.stringify(data)})
        // .then((e)=>{console.log(e)})
        .then ((response)=> response.json().then((dataa)=>{
            if(dataa.status==="success"){
                navigate("/home",{state:mail})
            }
            else if(dataa === "fail"){
                alert("user dont exist")
            }
            else if(dataa === "pass not match"){
                alert("password not same")
            }
        }))
    }
  return (
    <div className={style.back}>
        <Nav/>
        <div className={style.flex}>
            <div className={`${style.card}`}>
                <div className="card-body" style={{width:"300px",marginLeft:"30px",marginTop:"30px",color:"white"}}><h2>Sign In</h2>
                    <div style={{marginTop:"20px"}}>
                        <form onSubmit={checkLog}>
                            <input className={`${style.inp} bg-transparent`} onChange={(e)=>{setmail(e.target.value)}} name="email"placeholder="Email"  type="text"/>
                            <input className={`${style.inp} bg-transparent`} name="password" placeholder="Password"  type="password"/>
                            <button type="submit" className="btn" style={{width:"350px",backgroundColor:"red", color:"white",marginBottom:"10px"}}>Sign In</button>
                        </form>
                        <center><p style={{marginLeft:"53px"}}>Forget Password?</p></center>
                    </div>
                    <div style={{marginTop:"50px"}}>
                        <input type="checkbox" style={{ transform:'scale(1.7)', marginRight:"10px",marginBottom:"15px"}}></input>
                        <label>Remember Me</label>
                        <p>New to Netflix? <b>Sign Up Now</b></p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}
