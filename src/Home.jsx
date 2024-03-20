import React from 'react'

export default function Home() {
  return (
    <div>
        <div className="card">
        <div style={{height:"95vh", backgroundImage:'url("https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg")'}}>
        <center>
        <div style={{color:"white"}}>
        <b>
        <h1>
        Unlimited movies, TV shows and more
        </h1>
        </b>
        <h3>
        Watch anywhere. Cancel anytime.
        </h3>
        <h5>
        Ready to watch? Enter your email to create or restart your membership.
        </h5>
        <div>
            <input style={{
            }}
            placeholder="Email address"
            type="text"
            />
            <button
            className="btn"
            style={{
                backgroundColor:"red",
                color:"white",
                height: "50px",
                width: "150px",
                fontSize:"20px",
            }}>
                Get Started
            </button>
        </div>
        </div>
        </center>
        </div>    
    </div>
    </div>
  );
}
