import styled from "styled-components";

export const StyledContainer = styled.div`
  padding-top: ${(props) => props.topValue}px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 90px;
  padding-left: 90px;
  @media (max-width: 768px){
    padding:0px;
  }
`;

const StyledM = styled.img`
@media (max-width:992px){
  display:none;
}
  position: absolute;
  width: 116px;
  height: 109px;
  left: 83px;
  top: 34px;
  background: url("Monkeyfi logo.png");
`;
const StyledMfi = styled.img`
@media (max-width:992px){
  display:none;
}
  position: absolute;
  width: 255px;
  height: 40px;
  left: 205px;
  top: 66px;
  background: url("monkeyfi letters 1.png");
`;

const Styledlink = styled.a`
@media (max-width:992px){
  display:none;
}
  color: #f5f2ea;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  padding-top: 15px;
`;

export const Styledletter = styled.p`
@media (max-width:992px){
  display:none;
}
  cfont-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.13em;
  color: #cafc01;
`;

const StyledButton = styled.button`
@media (max-width:992px){
  display:none;
}
  width: 172px;
  height: 86px;
  border: 1px solid #cafc01;
  background: #cafc01;
  border-radius: 49px;
  margin-top: -10px;
`;
export const Styledsecure = styled.button`
@media (max-width:992px){
  display:none;
}
  width: 259px;
  height: 99px;
  background: #cafc01;
  box-shadow: 0px 4px 14px rgba(202, 252, 1, 0.74);
  border-radius: 21px;
  position:relative;
`;
export const StyledBorderLine = styled.div`
  border-bottom: 1px solid;
  border-color: #cbc3ad #cbc3ad rgba(35, 30, 16, 0.1);
`;

// const Row = styled.div

export { StyledM, StyledMfi, StyledButton, Styledlink };
