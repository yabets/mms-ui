import styled from "styled-components";
import EventCard from "../components/EventCard";

const Title = styled.h1`
  width: 142px;
  height: 37px;
  text-align: left;
  font: normal normal 600 28px/22px IBM Plex Sans;
  letter-spacing: 0px;
  color: #2c2738;
  opacity: 1;
`;
const Containter = styled.div`
  width: 694px;
  height: 901px;
  background: #ebf4f8 0% 0% no-repeat padding-box;
  border-radius: 13px;
  opacity: 1;
`;
const events = [
  {
    id: 1,
    title: "Event Name",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac nisl tellus. Aliquam erat volutpat. Morbi at volutpat felis. Nullam consequat pharetra tellus. Phasellus viverra libero nec augue maximus scelerisque. Nulla id laoreet arcu. Cras suscipit odio nec diam sodales, a tempus nunc ullamcorper.",
  },
  {
    id: 2,
    title: "Event Name",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac nisl tellus. Aliquam erat volutpat. Morbi at volutpat felis. Nullam consequat pharetra tellus. Phasellus viverra libero nec augue maximus scelerisque. Nulla id laoreet arcu. Cras suscipit odio nec diam sodales, a tempus nunc ullamcorper.",
  },
  {
    id: 3,
    title: "Event Name",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac nisl tellus. Aliquam erat volutpat. Morbi at volutpat felis. Nullam consequat pharetra tellus. Phasellus viverra libero nec augue maximus scelerisque. Nulla id laoreet arcu. Cras suscipit odio nec diam sodales, a tempus nunc ullamcorper.",
  },
];
const Event = () => {
  return (
    <div>
      <Title>Our Events</Title>
      <Containter>
        {events.map((event) => (
          <EventCard {...event} />
        ))}
      </Containter>
    </div>
  );
};

export default Event;
