import styled from "styled-components";

const Logo = styled.p`
  width: 100%;
  color: var(--dark-voilet);
  background: white;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  border-radius: 8px;
  &:before {
    content: "M";
  }
`;

export default Logo;
