import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function TimeSlots() {
  const [selected, setSelected] = useState(-1);
  // Generate time slots for a given day
  const generateTimeSlots = (date) => {
    const timeSlots = [];
    const startHour = 9; // 9 AM
    const endHour = 17; // 5 PM
    const currentDate = new Date(date);
    currentDate.setHours(startHour, 0, 0, 0); // Set starting time
    while (currentDate.getHours() < endHour) {
      timeSlots.push(new Date(currentDate));
      currentDate.setHours(currentDate.getHours() + 1); // Move to next hour
    }
    return timeSlots;
  };

  const date = new Date(); // Set the desired date

  return (
    <Container>
      <h5>Please chose a time for your appointment.</h5>
      <Row>
        {generateTimeSlots(date).map((item, index) => (
          <Col className="d-grid gap-2 mx-auto" sm={3} key={index}>
            <Button type="button" className="btn btn-primary my-3 p-2">
              {item.toLocaleTimeString()}{" "}
              {/* Format the date here as per your requirements */}
            </Button>
          </Col>
        ))}
        <Col>
          <Button type="button" className="btn btn-success my-4 p-2">
            Save Appointment
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
