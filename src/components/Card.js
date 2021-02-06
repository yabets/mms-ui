import styled from "styled-components";

const Card = styled.div`
  background: ${(props) => (props.color ? props.color : "white")};
  padding: 1rem;
  width: 100%;
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.shadow && props.shadow === "no-shadow"
      ? "none"
      : "0px 3px 6px rgba(0, 0, 0, 0.3)"};
  margin: 1rem 0;
`;

export default Card;
