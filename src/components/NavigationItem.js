import styled from "styled-components";

const NavigationItem = styled.div`
  background: ${(props) => (props.active ? "white" : "var(--broken-white)")};
  padding: 1rem 2rem;
  font-size: 1.3rem;
  font-weight: 600;
  height: 3.5rem;
  border: 2px solid
    ${(props) => (props.active ? "var(--light-blue)" : "var(--white-border)")};
  margin: 1rem 0;
  border-radius: 10px;
  &:hover {
    border: 2px solid var(--light-blue);
    cursor: pointer;
  }
`;

export default NavigationItem;
