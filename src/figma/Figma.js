import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  StyledContainer,
  StyledM,
  StyledMfi,
  Styledlink,
  StyledButton,
  Styledletter,
  Styledsecure,
} from "../styled/styledComponents";
import "../App.css";
import Footer from "./Footer";

const Figma = () => {
  return (
    <div>
      <img src="BGPattern.png" className="background" />
      <div className="body-container" style={{paddingTop:"50px",position:"relative"} }>
        <div
          style={{
            marginLeft: "350px",
            paddingTop: "58px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <StyledM></StyledM>
          <StyledMfi></StyledMfi>
          <Styledlink>About us</Styledlink>
          <Styledlink>wallets</Styledlink>
          <Styledlink>Market</Styledlink>
          <Styledlink>My chat</Styledlink>
          <Styledlink>Lite paper</Styledlink>
          <Styledlink>Sign up</Styledlink>
          <StyledButton>Sign in</StyledButton>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          <Styledletter>TRADE, SOCIALIZE AND EARN CRYPTO</Styledletter>
          <Styledsecure>
            <Styledvectorbg></Styledvectorbg>
            <Styledvector></Styledvector>
            <Styledvectorletter>100% Secure</Styledvectorletter>
            <Styledvectorword>Your funds are safe!</Styledvectorword>
          </Styledsecure>
        </div>
        <div className="dropbtn">&#9776;</div>
        <div className="letterdiv">
          <div>
            <ResTitle>A trusted and secure <br />cryptocurrency <br />exchange.</ResTitle>
            <ResLetter>Your guide to the world of an open<br /> financial system. Get started with the<br /> easiest and most secure platform to buy <br />and trade cryptocurrency.</ResLetter>
            <Styledease>
              trade the most <br />
              popular crypto <br />
              currencies, at ease.
            </Styledease>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Unsplash></Unsplash>
              <Monkeyfinance>
                Monkey Finance is a next-generation <br />
                cryptocurrency exchange that offers users on- <br /> boarding
                education, rewards, and an incredible <br />
                social aspect to buying/selling cryptos.
              </Monkeyfinance>
            </div>
          </div>
          <div>
            <Monkey src="./MF02 1.png"></Monkey>
          </div>
          <MarketsView>
            <StyledContainer
              topvalue={50}
              style={{ paddingRight: "30px", paddingLeft: "30px" }}
            >
              <Markets>Markets</Markets>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <USDtitle>MF/USD</USDtitle>
                <USDper>1.92%</USDper>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <USDnumber>0.0342</USDnumber>
                <USDletter>USD</USDletter>
                <Marketgraph></Marketgraph>
              </div>
              <div
                style={{ border: "1px solid #5E5C5C", marginTop: "8px" }}
              ></div>

              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <USDtitle>MF/USD</USDtitle>
                <USDper>1.92%</USDper>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <USDnumber>0.0342</USDnumber>
                <USDletter>USD</USDletter>
                <Marketgraph></Marketgraph>
              </div>
              <div
                style={{ border: "1px solid #5E5C5C", marginTop: "8px" }}
              ></div>

              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <USDtitle>MF/USD</USDtitle>
                <USDper>1.92%</USDper>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <USDnumber>0.0342</USDnumber>
                <USDletter>USD</USDletter>
                <Marketgraph></Marketgraph>
              </div>
              <div
                style={{ border: "1px solid #5E5C5C", marginTop: "8px" }}
              ></div>

              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <USDtitle>MF/USD</USDtitle>
                <USDper>1.92%</USDper>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <USDnumber>0.0342</USDnumber>
                <USDletter>USD</USDletter>
                <Marketgraph></Marketgraph>
              </div>
              <div
                style={{ border: "1px solid #5E5C5C", marginTop: "8px" }}
              ></div>
            </StyledContainer>
          </MarketsView>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "50px" }}>
          <StyledButton
            className="createbtn"
            style={{ width: "246px", height: "69px" }}
          >
            Create Wallet
          </StyledButton>
          <StyledButton
            className="createbtn"
            style={{ width: "246px", height: "69px", position: "relative" }}
          >
            Socialize
          </StyledButton>
          <Wallets>
            <StyledContainer
              topvalue={50}
              style={{ paddingRight: "20px", paddingLeft: "20px" }}
            >
              <Markets style={{ marginBottom: "0px" }}>Wallets</Markets>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <p style={{ color: "#FFFFFF", paddingRight: "20px" }}>BTC</p>
                <p style={{ color: "#FFFFFF", paddingRight: "20px" }}>
                  &#8646;
                </p>
                <p style={{ color: "#CAFC01" }}>USD</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <p style={{ color: "#FFFFFF", paddingRight: "40px" }}>
                  You got
                </p>
                <p style={{ color: "#CAFC01" }}>329.009ETH</p>
              </div>
              <StyledButton
                className="claimReward"
                style={{ width: "246px", height: "69px" }}
              >
                Claim Rewards
              </StyledButton>
            </StyledContainer>
          </Wallets>
        </div>
        <img src="./Button (2).png" className="bluebutton"></img>
        <SecondContainer>
          <div className="coingraph">
            <img
              src="./Card Assets.png"
              className="everygraph"
            />
            <img
              src="./Card Assets.png"
              className="everygraph"
            />
            <img
              src="./Card Assets.png"
              className="everygraph"
            />
            <img
              src="./Card Assets.png"
              className="everygraph"
            />
            <img
              src="./Card Assets.png"
              className="everygraph"
            />
            <img
              src="./Card Assets.png"
              className="everygraph"
            />
          </div>
          <p className="Title">
            The first-ever social exchange, because
            <br /> centralized exchanges don’t have to be boring!
          </p>
          <p className="subtitle">
            Monkey Finance has a variety of features that make it the <br />
            best place to start trading
          </p>
          <div className="flex justify">
            <div className="credit-card">
              <div className="card-icon-bg">
                <img
                  src="./graph.png"
                  style={{
                    width: "44px",
                    height: "44px",
                    marginRight: "auto",
                    marginLeft: "auto",
                    marginTop: "20px",
                  }}
                />
              </div>
              <p className="credit-card-title">Portfolio Manager</p>
              <p className="credit-card-content">
                Buy and sell popular digital <br />
                currencies, keep track of them <br />
                in the one place.
              </p>
            </div>
            <div className="credit-card second-card">
              <div className="card-icon-bg">
                <img
                  src="./graph.png"
                  style={{
                    width: "44px",
                    height: "44px",
                    marginRight: "auto",
                    marginLeft: "auto",
                    marginTop: "20px",
                  }}
                />
              </div>
              <p className="credit-card-title">Portfolio Manager</p>
              <p className="credit-card-content">
                Buy and sell popular digital <br />
                currencies, keep track of them <br />
                in the one place.
              </p>
            </div>
            <div className="credit-card">
              <div className="card-icon-bg">
                <img
                  src="./graph.png"
                  style={{
                    width: "44px",
                    height: "44px",
                    marginRight: "auto",
                    marginLeft: "auto",
                    marginTop: "20px",
                  }}
                />
              </div>
              <p className="credit-card-title">Portfolio Manager</p>
              <p className="credit-card-content">
                Buy and sell popular digital <br />
                currencies, keep track of them <br />
                in the one place.
              </p>
            </div>
          </div>
          <p className="Title">
            One click, instant payout
            <br /> with credit or debit card.
          </p>
          <p className="subtitle">
            Become a crypto owner in minutes using your debit or credit card and{" "}
            <br />
            quickly purchase top cryptocurrencies
          </p>
          <div className="flex justify">
          <Visa>
            <VisaForward>
              <VisaSelector>
                <p className="buybtn"
                >
                  Buy
                </p>
                <p
                  style={{
                    color: "#5D6588",
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                >
                  Sell
                </p>
              </VisaSelector>
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "Graphik Trial",
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#FFFFFF",
                }}
              >
                1 BTC is roughly
              </p>
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "Graphik Trial",
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#FFFFFF",
                }}
              >
                20,073.27 USD
              </p>
              <USDinput>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  5000
                </p>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  USD
                </p>
              </USDinput>
              <BTCinput>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  0.8511
                </p>
                <p
                  style={{
                    color: "#FFFFFF",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  BTC
                </p>
              </BTCinput>
              <Buybtn>Buy now</Buybtn>
            </VisaForward>
          </Visa>
          </div>
          <p className="subtitle">We accept payment with many methods:</p>
          <div className="flex-around">
            <img src="./Type=Credit Card.png" />
            <img src="./Type=Visa.png" />
            <img src="./Frame 25.png" />
            <img src="./paypal-784404_960_720 1.png" />
          </div>
          <p className="Title">
            Crypto education, awareness and inclusivity to <br />
            Latin America and the rest of the world
          </p>
          <p className="subtitle">
            We believe MonkeyFi is here to stay — and that a future worth
            building is one which <br />
            opens its doors and invites everyone in.
          </p>
          <div className="flex justify">
            <Clarity>
              <ClarityIcon></ClarityIcon>
              <div>
              <p style={{fontWeight:"700",fontSize:"18px",fontFamily: 'Sofia Pro',color:"#FFFFFF",textAlign:"center"}}>Clarity</p>
              <p className="subtitle">
                We help you make sense of the <br />
                coins, the terms, the dense charts <br />
                and market changes.
              </p></div>
            </Clarity>
            <Clarity>
              <ClarityIcon></ClarityIcon>
              <div>
              <p style={{fontWeight:"700",fontSize:"18px",fontFamily: 'Sofia Pro',color:"#FFFFFF",textAlign:"center"}}>Clarity</p>
              <p className="subtitle">
                We help you make sense of the <br />
                coins, the terms, the dense charts <br />
                and market changes.
              </p></div>
            </Clarity>
            <Clarity>
              <ClarityIcon></ClarityIcon>
              <div>
              <p style={{fontWeight:"700",fontSize:"18px",fontFamily: 'Sofia Pro',color:"#FFFFFF",textAlign:"center"}}>Clarity</p>
              <p className="subtitle">
                We help you make sense of the <br />
                coins, the terms, the dense charts <br />
                and market changes.
              </p></div>
            </Clarity>
          </div>
          <p className="Title">
            What the media will say about <br />
            MonkeyFi?
          </p>
          <div className="flex justify">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <img
                src="./Arrow - Left Circle.png"
                className="Larrow"
              ></img>
              <img
                src="./yahoo finance 1.png"
                className="yahoo"
              ></img>
              <Forbes>
                <img src="./forbes-logo-white 1.png"></img>
                <p
                  style={{
                    fontFamily: "Graphik Trial",
                    fontWeight: "400",
                    fontSize: "25px",
                    color: "#FFFFFF",
                    textAlign: "center",
                  }}
                >
                  “Monkey Finance makes a splash in Latin America as the fastest
                  growing cryptocurrency exchange ”
                </p>
              </Forbes>
              <img src="./Newsweek Logo.png" className="newsweek"></img>
              <img
                src="./Arrow - Right Circle.png" className="Rarrow"
                style={{ width: "34px", height: "34px" }}
              ></img>
            </div>
          </div>
          <p className="Title">
            Build your crypto portfolio <br />
            anywhere.
          </p>
          <p className="subtitle">
            A powerful cryptocurrency exchange in your pocket.
            <br /> Buy, sell and trade crypto on the go.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="./Illustration.png"></img>
          </div>
          <div className="flex justify">
            <Started>
              <StartedReady>
                Ready to start trading cryptocurrency?
              </StartedReady>
              <p
                style={{
                  fontFamily: "Graphik Trial",
                  fontWeight: "700",
                  fontSize: "39px",
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                “Monkey Finance makes a splash in Latin America as the fastest
                growing cryptocurrency exchange ”
              </p>
              <StartedBtnPart>
                <p className="subtitle">enter your email</p>
                <StartedBtn>Get Started</StartedBtn>
              </StartedBtnPart>
            </Started>
          </div>
          <Footer />
          <div style={{border:"1px solid #34384C",marginTop:"15px"}}></div>
          <div style={{display:"flex",justifyContent:"space-around"}}>
            <p style={{fontWeight:"400",fontSize:"16px",color:"#E5E6ED",fontFamily:"'Graphik Trial'"}}>MonkeyFi ©. All rights reserved.</p>
            <p style={{fontWeight:"400",fontSize:"16px",color:"#E5E6ED",fontFamily:"'Graphik Trial'"}}>Term of Service | Privacy Policy</p>
          </div>
        </SecondContainer>
      </div>
    </div>
  );
};
const ResTitle = styled.p`
font-family: 'Sofia Pro';
font-style: normal;
font-weight: 700;
font-size: 70px;
line-height: 110%;
/* or 37px */

text-align: center;

/* Base/Grey 0 */

color: #FFFFFF;
display:none;
@media (max-width:992px){
  display:block;
}
`;
const ResLetter = styled.p`
font-family: 'Graphik Trial';
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 27px;
/* or 169% */

text-align: center;

/* Base/Grey 20 */

color: #E5E6ED;

display:none;
@media (max-width:992px){
  display:block;
}
`;
const StartedBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;
  background: linear-gradient(
    265.56deg,
    #cafc01 -0.27%,
    #cafc01 33.71%,
    #34a948 98.59%
  );
  box-shadow: 0px 0px 15px #cafc01;
  border-radius: 100px;
  width: 153px;
  gap: 10px;
  @media (max-width:992px){
    background: linear-gradient(265.56deg, #246CF9 -0.27%, #1E68F6 -0.26%, #0047D0 98.59%);
  }
`;
const StartedBtnPart = styled.div`
  display: flex;
  background: rgba(47, 50, 65, 0.5);
  /* Base/Grey 80 */

  border: 1px solid #34384c;
  border-radius: 100px;
  justify-content: space-between;
  padding: 8px 8px 8px 32px;
  gap: 10px;
  width: 615px;
`;
const StartedReady = styled.div`
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  width: 826px;
  height: 27px;
`;
const Started = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(47, 50, 65, 0.5);
  backdrop-filter: blur(7px);
  border-radius: 12px;
  width: 1111px;
  padding: 10px 0;
`;
const Forbes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 587px;
  height: 252.02px;
  background: rgba(47, 50, 65, 0.5);
  border-radius: 12px;
`;
const Clarity = styled.div`
  width: 30%;
  display:flex;
  flex-direction:column;
  @media (max-width: 992px) {
    width:60%;
    display:flex;
    flex-direction:row;
  }
`;
const ClarityIcon = styled.div`
  background: rgba(47, 50, 65, 0.5);
  box-shadow: 1px 0px 8px 2px rgba(202, 252, 1, 0.6);
  border-radius: 12px;
  width: 111px;
  height: 111px;
  margin: auto;
`;
const Wallets = styled.div`
width:318px;
  height:260px;
  background: linear-gradient(132.45deg, rgba(126, 126, 126, 0.4) 3.01%, rgba(126, 126, 126, 0) 107.67%);
  backdrop-filter:5px;
  border-radius:30px;
  position: absolute;
  right:100px;
  top:500px;
}
@media (max-width:1440px){
    display: none;
}
`;
const Buybtn = styled.button`
  background: linear-gradient(
    265.56deg,
    #cafc01 -0.27%,
    #cafc01 49.16%,
    #34a948 98.59%
  );
  box-shadow: 0px 0px 15px #cafc01;
  border-radius: 100px;
  width: 342px;
  height: 65px;
  color: black;
  margin-left: 30.5px;
  @media (max-width:992px){
    background: linear-gradient(265.56deg, #246CF9 -0.27%, #1E68F6 -0.26%, #0047D0 98.59%);
    box-shadow:none;
  }
`;

const BTCinput = styled.div`
  display: flex;
  justify-content: space-around;
  width: 343px;
  height: 59px;
  background: rgba(47, 50, 65, 0.5);
  border: 1px solid #34384c;
  border-radius: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const USDinput = styled.div`
  display: flex;
  justify-content: space-around;
  width: 343px;
  heigth: 59px;
  background: rgba(47, 50, 65, 0.5);
  border: 1px solid #34384c;
  border-radius: 100px;
  margin-left: auto;
  margin-right: auto;
`;
const SecondContainer = styled.div`
@media (max-width:1240px){
  padding:0;
}
  margin-left: auto;
  margin-right: auto;
  padding-right: 200px;
  padding-left: 200px;
  @media (max-width: 768px) {
    padding-right: 0px;
  }
`;
const VisaSelector = styled.div`
  display: flex;
  justify-content: space-around;
`;
const VisaForward = styled.div`
  background: rgba(47, 50, 65, 0.5);
  backdrop-filter: blur(32px);
  border-radius: 20px;
  width: 406px;
  height: 449px;
  @media (max-width: 768px) {
    width: 100% !important;
  }
`;
const Visa = styled.div`
  display: flex;
  justify-content: center;
  width:100%;
  
`;
const Markets = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 160%;
  color: #ffffff;
`;
const USDtitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 160%;
  color: #606166;
  padding-right: 30px;
  margin: 10px 0 0 0;
`;
const USDper = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 160%;
  color: #606166;
  margin: 10px 0 0 0;
`;
const USDnumber = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 160%;
  color: #ffffff;
  padding-right: 23px;
  margin: 0;
`;
const USDletter = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 23px;
  line-height: 160%;
  color: #ffffff;
  margin: 0;
  padding-right: 30px;
`;
const Marketgraph = styled.img`
  background: url("Vector 1.png");
  width: 89.5px;
  height: 35.17px;
`;
const MarketsView = styled.div`
@media (max-width:1440px){
  display:none;
}
  width: 343px;
  height: 496px;
  background: #2a2b31;
  opacity: 0.7;
  border-radius: 34px;
  position: absolute;
  top: 240px;
  right: 200px;
`;
const Monkey = styled.img`
@media (max-width:1440px){
  display:none;
}
  // background: url("MF02 1.png");
  position:absolute;
  right:200px;
  width: 951px;
  height: 951px;

`;
const Unsplash = styled.div`
  margin-top: 27.5px;
  width: 8px;
  height: 85px;
  background: linear-gradient(0deg, #cafc01, #cafc01), #c4c4c4;
  @media (max-width:992px){
    display:none;
  }
`;
const Monkeyfinance = styled.div`
@media (max-width:992px){
  display:none;
}
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 35px;
  color: #f5f2ea;
  opacity: 0.6;
  padding-left: 22px;
`;
const Styledvectorbg = styled.div`
  position: absolute;
  width: 66px;
  height: 73px;
  left: 14px;
  top: 13px;
  border-radius: 10px;
  background: rgba(162, 200, 9, 0.55);
`;
const Styledvector = styled.img`
  position: absolute;
  width: 42px;
  height: 47px;
  left: 25.64px;
  top: 27px;
  background: url("Vector.png");
`;
const Styledvectorletter = styled.p`
  margin-left: 67px;
  margin-bottom: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  padding: 0;
`;
const Styledvectorword = styled.p`
  margin-left: 55px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #403f3f;
  padding: 0;
  margin-top: 0;
`;
const Styledease = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 65px;
  line-height: 81px;
  color: #f5f2ea;
  margin-top: -40px;
  margin-bottom: 0;
  @media (max-width:992px){
    display:none;
  }
`;
export default Figma;
