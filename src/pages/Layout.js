import { Outlet, Link } from "react-router-dom";
import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  StyledContainer,
  StyledLeftNav,
  StyledRightNav,
  StyledButton,
  StyledBorderLine,
} from "../styled/styledComponents";
import "../App.css";

const Layout = () => {
  const isSmall = useMediaQuery({ query: "(max-width:425px)" });
  const isMedium = useMediaQuery({ query: "(max-width:768px)" });
  const isLarge = useMediaQuery({ query: "( max-width:1024px)" });
  const isExtraLarge = useMediaQuery({ query: "(min-width:1025px)" });
  const isEELarge = useMediaQuery({ query: "(max-width:2560px)" });
  return (
    <div>
      <StyledContainer topValue={100} style={{ backgroundColor: "#cbc3ad" }}>
        {isExtraLarge && (
          <div style={{ height: "80px" }}>
            <StyledLeftNav>Gnosis Chain</StyledLeftNav>
            <StyledRightNav>
              <StyledButton>Quick Start</StyledButton>
            </StyledRightNav>
            <StyledRightNav>Carrers</StyledRightNav>
            <StyledRightNav>Blog</StyledRightNav>
            <StyledRightNav>Community</StyledRightNav>
            <StyledRightNav>Developers</StyledRightNav>
            <StyledRightNav>Validators</StyledRightNav>
          </div>
        )}
        {isLarge && (
          <div style={{ height: "60px" }}>
            <StyledLeftNav>Gnosis Chain</StyledLeftNav>
            <StyledRightNav style={{ fontSize: "30px", margin: "0" }}>
              &#9776;
            </StyledRightNav>
          </div>
        )}
        {isSmall && !isMedium && !isLarge && !isExtraLarge && (
          <div style={{ height: "80px" }}>
            <StyledLeftNav>Gnosis Chain</StyledLeftNav>
            <StyledRightNav>&#9776;</StyledRightNav>
          </div>
        )}
        {isExtraLarge && <StyledBorderLine style={{ height: "3px" }} />}
        {!isExtraLarge && (
          <StyledBorderLine
            style={{
              height: "3px",
              marginRight: "-100px",
              marginLeft: "-100px",
            }}
          />
        )}
        <StyledContainer
          topValue={50}
          style={{
            paddingRight: "120px",
            paddigLeft: "120px",
            fontSize: "50px",
            color: "#3e6957",
            position: "relative",
          }}
        >
          {isExtraLarge && (
            <img
              src="https://uploads-ssl.webflow.com/63692bf32544bee8b1836ea6/636a9f1b2ebd5e4fbeb7c223_hero-door.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 75vw, (max-width: 991px) 64vw, 526.0703125px"
              alt=""
              className="hero-image responsive"
              data-xblocker="passed"
            />
          )}
          {!isExtraLarge && isEELarge && (
            <img
              src="https://uploads-ssl.webflow.com/63692bf32544bee8b1836ea6/636a9f1b2ebd5e4fbeb7c223_hero-door.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 75vw, (max-width: 991px) 64vw, 526.0703125px"
              alt=""
              className="hero-image responsive"
              data-xblocker="passed"
            />
          )}
          <div className="hero-content">
            <h1 className="run-chain">The Community-</h1>
            <h1 className="run-chain">Run Chain</h1>
            <p className="run-chain" style={{ fontSize: "40px" }}>
              Gnosis Chain is one of the first Ethereum
            </p>
            <p className="run-chain" style={{ fontSize: "40px" }}>
              sidechains and has stayed true to its values.
            </p>
            <p
              className="run-chain"
              style={{ fontSize: "25px", paddingTop: "15px" }}
            >
              By allowing contributors around the globe to easily run a<br />
              node, Gnosis Chain is secured by over 100k validators. Its <br />
              diverse validator set and the community governance ensure <br />
              Gnosis Chain remains credibly neutral at a much lower price <br />
              point than mainnet.
            </p>
          </div>

          <div className="linkbutton">
            <StyledButton style={{ color: "#ddd", marginRight: "40px" }}>
              Get Started Now
            </StyledButton>
            <StyledButton
              style={{ backgroundColor: "#cbc3ad", borderColor: "#3e6957" }}
            >
              Read the Docs
            </StyledButton>
          </div>
        </StyledContainer>
      </StyledContainer>
    </div>
  );
};

export default Layout;
