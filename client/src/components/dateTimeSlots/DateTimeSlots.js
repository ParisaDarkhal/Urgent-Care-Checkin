import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_APPOINTMENT } from "../../utils/mutations";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function TimeSlots() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(-1);
  const [chosenTimeSlot, setChosenTimeSlot] = useState(null);
  const [addAppointment, { error }] = useMutation(ADD_APPOINTMENT);
  const { patientId } = useParams();
  console.log("patient? ", patientId);
  // const userIdForTest = "648a0329a93c6d363e0716d1";

  // Generate time slots for a given day
  const generateTimeSlots = (date) => {
    const timeSlots = [];
    const startHour = 9; // 9 AM
    const endHour = 17; // 5 PM
    const currentDate = new Date(date);
    currentDate.setHours(startHour, 0, 0, 0); // Set starting time
    while (currentDate.getHours() < endHour) {
      timeSlots.push(new Date(currentDate));
      currentDate.setHours(currentDate.getHours() + 1);
    }
    return timeSlots;
  };

  const date = new Date(); // Set the desired date, might not be used in our application

  const handleBtnSelection = (btnIndex, item) => {
    setSelected(btnIndex);
    setChosenTimeSlot(item.toLocaleTimeString());
  };

  const handleSaveBtn = async () => {
    try {
      const { data } = await addAppointment({
        variables: {
          input: {
            appt_date: chosenTimeSlot,
            appt_time: chosenTimeSlot,
            patient: patientId,
          },
        },
      });
      console.log("what is tis in datetime", data);
      navigate(`/confirmation/${patientId}`);
    } catch (err) {
      console.error("======Error", err);
      return;
    }
  };

  return (
    <Container>
      <h5>Please chose a time for your appointment.</h5>
      <Row>
        {generateTimeSlots(date).map((item, index) => (
          <Col className="d-grid gap-2 mx-auto" sm={3} key={index}>
            {index === selected ? (
              <Button
                type="button"
                className="btn btn-success my-3 p-2"
                onClick={() => handleBtnSelection(index, item)}
              >
                {item.toLocaleTimeString()}{" "}
              </Button>
            ) : (
              <Button
                type="button"
                className="btn btn-primary my-3 p-2"
                onClick={() => handleBtnSelection(index, item)}
              >
                {item.toLocaleTimeString()}{" "}
              </Button>
            )}
          </Col>
        ))}
        <Col>
          <Button
            type="button"
            className="btn btn-success my-4 p-2"
            onClick={handleSaveBtn}
          >
            Save Appointment
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
