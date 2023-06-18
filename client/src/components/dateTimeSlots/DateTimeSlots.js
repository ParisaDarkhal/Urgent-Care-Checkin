import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Navbar from "../Navbar";
import Footer from "../Footer";

import { useMutation } from "@apollo/client";
import { ADD_APPOINTMENT } from "../../utils/mutations";
import { GET_APPOINTMENTS } from "../../utils/queries";
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
  const currentDate = new Date();

  /////////////to convert date
  const convertDate = (today) => {
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = mm + "-" + dd + "-" + yyyy;
    return formattedToday;
  };

  /////////////////////////////
  // Fetch existing appointments from the database
  const { loading, data } = useQuery(GET_APPOINTMENTS, {
    variables: {
      appt_date: convertDate(currentDate),
    },
  });
  if (loading) return <div>Loading ...</div>;
  console.log("data :>> ", data);

  ////////////////////////////

  // Generate time slots for a given day
  const generateTimeSlots = () => {
    const timeSlots = [];
    const startHour = 9; // 9 AM
    const endHour = 17; // 5 PM

    currentDate.setHours(startHour, 0, 0, 0); // Set starting time
    while (currentDate.getHours() < endHour) {
      timeSlots.push(new Date(currentDate));
      currentDate.setHours(currentDate.getHours() + 1);
    }
    /////////////////////////////////////////////////////////////

    const existingAppointments = data?.appointmentsByDate || [];
    const takenTimeSlots = existingAppointments.map(
      (appointment) => appointment.appt_time
    );

    const disabledTimeSlots = timeSlots.filter((timeSlot) =>
      takenTimeSlots.some(
        (takenSlot) => takenSlot === timeSlot.toLocaleTimeString()
      )
    );

    return timeSlots.map((timeSlot) => ({
      time: timeSlot,
      isDisabled: disabledTimeSlots.some(
        (disabledSlot) =>
          disabledSlot.toLocaleTimeString() === timeSlot.toLocaleTimeString()
      ),
    }));

    /////////////////////////////////////////////////////////////
  };

  const handleBtnSelection = (btnIndex, item) => {
    setSelected(btnIndex);
    setChosenTimeSlot(item.time.toLocaleTimeString());
  };

  const handleSaveBtn = async () => {
    try {
      const currentDate = new Date(); // Get today's date
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      const formattedDate = `${month}-${day}-${year}`; // Format the date as "MM-DD-YYYY"
      console.log("patientId :>> ", patientId);
      const { data } = await addAppointment({
        variables: {
          input: {
            appt_date: formattedDate, // Set today's date
            appt_time: chosenTimeSlot,
            patient: patientId,
          },
        },
      });
      navigate(`/confirmation/${patientId}`);
    } catch (err) {
      console.error("======Error", err);
      return;
    }
  };

  return (
    <div>
      <Navbar />
      <Container>
        <h5>Please chose a time for your appointment.</h5>
        <Row>
          {generateTimeSlots().map((item, index) => (
            <Col className="d-grid gap-2 mx-auto" sm={3} key={index}>
              {index === selected ? (
                <Button
                  type="button"
                  className="btn btn-success my-3 p-2"
                  onClick={() => handleBtnSelection(index, item)}
                  disabled={item.isDisabled} // Added disabled prop
                >
                  {item.time.toLocaleTimeString()}{" "}
                </Button>
              ) : (
                <Button
                  type="button"
                  className="btn btn-primary my-3 p-2"
                  onClick={() => handleBtnSelection(index, item)}
                  disabled={item.isDisabled} // Added disabled prop
                >
                  {item.time.toLocaleTimeString()}{" "}
                </Button>
              )}
            </Col>
          ))}
          <Col>
            <Button
              type="button"
              className="btn btn-success my-4 p-2"
              onClick={handleSaveBtn}
              disabled={!chosenTimeSlot} // Disable button if no time slot is chosen
            >
              Save Appointment
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
