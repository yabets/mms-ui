import styled from "styled-components";

const Card = styled.div`
  width: 645px;
  height: 200px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
`;
const Button = styled.button`
  width: 140px;
  height: 48px;
  background: #0880ae 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 8px #2c273814;
  opacity: 1;
`;
const Title = styled.h1`
  width: 565px;
  height: 44px;
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  letter-spacing: 0px;
  color: #2c2738;
  opacity: 1;
`;

const EventCard = ({ title, body }) => {
  return (
    <Card>
      <Title>{title}</Title>
      {body}
      <Button>View</Button>
    </Card>
  );
};
export default EventCard;
