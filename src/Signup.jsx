import React from 'react'
import {useState} from 'react'
import Footer from "./Footer.jsx";
import Nav from "./Nav.jsx";
import {Button} from "react-bootstrap";
import Signup2 from "./Signup2.jsx";
import Signup3 from "./Signup3.jsx";
import Signup4 from './Signup4.jsx';

export default function Signup() {
    const[step,setStep]=useState (1);
    const queryParameters =new URLSearchParams(window.location.search)
    const mail =queryParameters.get("mail")
    function getData(data){
        setStep(data)
    }
    if(step ===2){
        return(
            <Signup2 f={getData}/>
        )
    }
    else if(step===3){
        return(
            <Signup3 x={getData}/>
        )
    }
    else if(step===4){
        return(
            <Signup4/>
        )
    }
  return (
    <div>
        {/* <Nav/> */}
        <Nav/>

        <hr></hr>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"50px"}}>
            <div className='py-1'>
                <div className='card-body'>
                    <p style={{fontSize:"13px",margin:"0px"}}>STEP<b>1</b>OF<b>3</b></p>
                    <h2>Welcome </h2>
                    <h2>Joining Netflix is easy.</h2>
                    <p style={{fontSize:"20px",width:"400px"}}>Enter your password and youll be watching in no time.</p>
                    <div className='mt-4'>
                        <form>
                            <label>Email</label>
                            <p><b>{mail}</b></p>
                            <input type='password' className='form-control'placeholder='Enter password' style={{height:"60px",width:"450px",border:"solid 1px grey"}}></input>
                            <Button variant='danger' onClick={()=>{
                                setStep(2)
                            }} style={{width:"100%",marginTop:"10px",height:"70px",backgroundColor:"red",fontSize:"25px"}}>Next</Button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
        <div style={{marginTop:"150px"}}>
            <Footer/>
        </div>
    </div>
  );
}