import "../App.css";

const Footer = () => {
  return (
    <div className="footerresp fl flex-row flex-center flex-align" style={{marginTop:"20px"}}>
      <div className="fl flex-column flex-align footerwidth" style={{paddingRight:"30px"}}>
        <img src="./Group 29.png" style={{width:"267px",height:"80px",paddingBottom:"60px"}}></img>
        <div className="fl flex-row  flex-align">
          <img src="./Linked In.png"></img>
          <img src="./Facebook.png"></img>
        </div>
      </div>
      <div className="fl flex-column flex-align footerwidth" style={{paddingRight:"30px"}}>
        <p className="subtitle">Quick Links</p>
        <div className="fl flex-column  flex-align">
          <div className="fl flex-row flex-align">
            <p className="subtitle" style={{color:"#B9D34E",paddingRight:"25px"}}>Buy/Sell</p>
            <p className="subtitle" style={{color:"#B9D34E"}}>My Chat</p>
          </div>
          <div className="fl flex-row flex-align">
            <p className="subtitle" style={{color:"#B9D34E",paddingRight:"25px"}}>Trade Now</p>
            <p className="subtitle" style={{color:"#B9D34E"}}>LitePaper</p>
          </div>
          <div className="fl flex-row flex-align">
            <p className="subtitle" style={{color:"#B9D34E"}}>Wallet</p>
            <p className="subtitle" style={{color:"#B9D34E"}}></p>
          </div>
        </div>
      </div>
      <div className="fl flex-column flex-align footerwidth">
        <p className="subtitle">Quick Links</p>
        <p className="subtitle" style={{color:"#B9D34E"}}>Subscribe to get the latest updates <br />from our exchange!</p>
        <div className="fl flex-row flex-align send-bg">
            <p className="subtitle">Enter your email address</p>
            <img src="./Button.png" style={{width:"85px"}}></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;