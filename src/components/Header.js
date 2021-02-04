import styled from "styled-components";
import logo from "../logo.svg";
const Button = styled.button`
  background: "#2c273814";
  border-radius: "3px";
  color: #7c9cbf;
  margin: 1em;
  padding: 0.25em 1em;
`;

const style = {
  background: "#2C2738",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
};
function Header({ user }) {
  return (
    <div style={style}>
      <img
        style={{ width: "40px", height: "40px" }}
        src={logo}
        alt="Member management system logo"
      />
      <div>
        <img
          style={{ width: "40px", height: "40px" }}
          src={logo}
          alt={`${user.name} profile picture`}
        />
        <Button>Logout</Button>
      </div>
    </div>
  );
}

export default Header;
