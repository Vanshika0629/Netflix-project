import Style from "./front.module.css";
import Nav from "./Nav.jsx";

export default function Home() {
  return (
    <div>
      <div className={Style.boxs}>
      <div
          style={{
            backgroundImage:'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url("https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg")',
            height: "95vh",
            boxShadow:"1000px"
          }}
        >
          <Nav/>
          <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}>
            <center>{" "}
              <div className={Style.txtcard}>
              <b>
                  <h1 className={`${Style.txt}`} style={{fontWeight:"bolder",fontSize:"52px"}}>
                    Unlimited movies, TV shows and more
                  </h1>
                </b>
                <h4 style={{color:"white",marginTop:"10px"}}>
                  Watch anywhere. Cancel anytime.
                </h4>
                <h5 style={{color:"white",marginTop:"10px"}}>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h5>
                <div>
                  <input className={`${Style.inp}`}
                    placeholder="  Email address" 
                    type="text"
                  />
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      height: "50px",
                      width: "150px",
                      fontSize: "20px",
                      marginBottom: "5px"
                    }}
                  ><b> Get Started </b>
                </button>
                  </div>
              </div>
            </center>
          </div>
          </div>
      </div>
    </div>
  );
}
