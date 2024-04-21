import React from 'react'
import Footer from "./Footer.jsx";
import style from "./Sign.module.css";
import Nav from "./Nav.jsx";

export default function Sign() {
  return (
    <div className={style.back}>
        <Nav/>
        <div className={style.flex}>
            <div className={`${style.card}`}>
                <div className="card-body" style={{width:"300px",marginLeft:"30px",marginTop:"30px",color:"white"}}><h2>Sign In</h2>
                    <div style={{marginTop:"20px"}}>
                        <form>
                            <input className={`${style.inp} bg-transparent`} placeholder="Email"  type="text"/>
                            <input className={`${style.inp} bg-transparent`} placeholder="Password"  type="password"/>
                            <button className="btn" style={{width:"100%",backgroundColor:"red", color:"white",marginBottom:"10px"}}>Sign In</button>
                        </form>
                        <center><p>Forget Password</p></center>
                    </div>
                    <div style={{marginTop:"50px"}}>
                        <input type="checkbox" style={{ transform:'scale(1.7)', marginRight:"10px",marginBottom:"15px"}}></input>
                        <label>Remeber Me</label>
                        <p>New to Netflix <b>Sign Up Now</b></p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}
