import { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CardTitle from "../../components/CardTitle";
import Modal from "../Modal";
import Search from "../Search";
import "./index.css";

const events = [
  {
    id: 1,
    title: "Event Name",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac nisl tellus. Aliquam erat volutpat. Morbi at volutpat felis. Nullam consequat pharetra tellus. Phasellus viverra libero nec augue maximus scelerisque. Nulla id laoreet arcu. Cras suscipit odio nec diam sodales, a tempus nunc ullamcorper.",
    date: "00/00/0000",
    time: "00:00 AM",
    location: "Addis Ababa, Ethiopia",
    price: "0.00 ETB",
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

const Events = () => {
  const [viewEvent, setViewEvent] = useState(false);

  const toggleViewEvent = () => {
    setViewEvent(!viewEvent);
  };
  return (
    <>
      {viewEvent && <Modal event={events[0]} closeModal={toggleViewEvent} />}
      <section className="Events__container">
        <h1 className="Events__title">Our Events</h1>
        <div className="Events__search--box">
          <div className="Events__search--input">
            <Search />
          </div>

          <select className="Event__sort" htmlName="sort">
            <option>Sort </option>
          </select>
        </div>
        {events.map((event) => (
          <Card key={event.id}>
            <CardTitle>{event.title}</CardTitle>
            <p className="Event__body">{event.body}</p>
            <div className="Event__view--button">
              <Button onClick={toggleViewEvent}>View</Button>
            </div>
          </Card>
        ))}
      </section>
    </>
  );
};

export default Events;
