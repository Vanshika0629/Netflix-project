import {Col,Row} from "react-bootstrap";

export default function Card4() {
  return (
    <div className="card" style={{backgroundColor:"black",color:"white"}}>
        <div className="card-body">
            <Row>
                <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <img style={{marginTop:"58px",height:"68vh"}}src="https://occ-0-2164-3467.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" > 
               </img>
                </Col>
                <Col style={{marginTop:"7%"}}>
            <h1 style={{fontSize:"58px",fontWeight:"bold"}}>Create profiles for kids</h1>
                <h4 style={{marginLeft:"4px",marginTop:"10px"}}>Send childern on adventures with their favourite characters in a space made just for them-free with your membership.</h4>
                </Col>
            </Row>
            </div> 
    </div>
  )
}