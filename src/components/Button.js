import styled from "styled-components";

const Button = styled.button`
  color: ${(props) =>
    props.primary ? "var(--white-blue)" : "var(--broken-white)"};
  background: ${(props) => (props.primary ? "white" : "var(--light-blue)")};
  width: 100%;
  height: 100%;
  font-size: 1rem;
  font-weight: 500;
  outline: none;
  border-radius: 5px;
  box-shadow: 0px 4px 8px var(--dark-voilet-shadow);
  border: none;
`;

export default Button;
