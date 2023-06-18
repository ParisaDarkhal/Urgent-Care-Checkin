import React, { useState } from "react";
import {useQuery } from "@apollo/client";
import Navbar from "../Navbar";
import Footer from "../Footer";

import { useMutation } from "@apollo/client";
import { RESCHEDULE_APPT } from "../../utils/mutations";
import { GET_APPOINTMENTS } from "../../utils/queries";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

    // ---------------
export default function RescheduleAppointment() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(-1);
  const [chosenTimeSlot, setChosenTimeSlot] = useState({
    appt_time:'',
  });
  const [updateAppointment, { error }] = useMutation(RESCHEDULE_APPT);
  const { appointmentId } = useParams();
  const currentDate = new Date();
//--------handle input
const [confirmationInput, setConfirmationInput] = useState({
  referencenumber: "",
});

const handleInputChange = (e) => {
  const { name, value } = e.target;

  console.log("ENTERING NUMBER:", confirmationInput);

  setConfirmationInput({ ...confirmationInput, [name]: value });
  console.log("YOU ENTERED", confirmationInput);
};
//--------END ------handle input
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

  const handleSaveBtn = async (e) => {
    e.preventDefault();
    console.log("selected time: ", chosenTimeSlot);
    console.log("reference number", confirmationInput.referencenumber)
    try {
      const currentDate = new Date(); // Get today's date
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      const formattedDate = `${month}-${day}-${year}`; // Format the date as "MM-DD-YYYY"
      const  data = await updateAppointment({
        variables: { 
          appointmentId: confirmationInput.referencenumber,
          appt_time: chosenTimeSlot,
          appt_date:formattedDate
        },
      });
      console.log(data);
      // console.log(data.updateAppointment.appt_date);
      console.log("update worked", confirmationInput);
    } catch (err) {
      console.error("Error", err);
    };
    // setChosenTimeSlot({
    //   appt_time:""
    // })
  };


  return (
    <div>
      <Navbar />
      <input className="form-control"
          type="text"
          name="referencenumber"
          value={confirmationInput.referencenumber}
          onChange={handleInputChange}
                    />
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
              disabled={!chosenTimeSlot}  //  Disable button if no time slot is chosen
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


// {/* <div>
//             <Navbar />
//             <section className="page-title bg-1 bgSerg">
//                 <div className="overlay" />
//             </section>
//             <section className="appoinment section ">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-4">
//                             <div className="mt-3">
//                                 <div className="feature-icon mb-3">
//                                     <i className="icofont-support text-lg" />
//                                 </div>
//                                 <span className="h3">Call for an Emergency Service!</span>
//                                 <h2 className="text-color mt-3">+84 789 1256 </h2>
//                             </div>
//                         </div>
//                         <div className="col-lg-8">
//                             <div className="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
//                                 <h2 className="mb-2 title-color">Reschedule your appoitnment</h2>
//                                 <p className="mb-4">
//                                     We understand that things happen! if it is an Emergency please
//                                     contact 911.
//                                 </p>
//                                 <form  onSubmit={handleSubmit}>
//                                     <div className="mb-3">
//                                         <label className="form-label">Enter your confirmation number: </label>
//                                         <input type="text" className="form-control"
//                                             name="referencenumber"
//                                             value={confirmation.referencenumber}
//                                             onChange={handleInputChange} />
//                                     </div>
//                                     <p>{appotEnter.appt_time}</p>
//                                     <button className="btn btn-main btn-round-full" type="submit"> Submit </button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>



//             <Footer />
//         </div> */}
// ------\
  // ------------THIS CONSOLE LOG THE INPUT AND ALSO BUTOON DISPLAY NUMBER ENTERES
 // const [confirmation, setConfirmation] = useState(
    //             { referencenumber: '' });
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log("click and you entered: ", confirmation.referencenumber)
    // }
    // const { appointmentId } = useParams;

    // const { loading, data } = useQuery(FIND_APPOINTMENT, {
    //     variables: { appointmentId: appointmentId },
    // });
    // const appotEnter = data?.appointment || {};
    // if (loading) {
    //     return <div>LOADING.. </div>
    // }





    // --------------- this also worked a little lol
//     import React, { useState } from "react";
// import Navbar from '../Navbar';
// import Footer from '../Footer';

// import { useMutation } from "@apollo/client";
// import { RESCHEDULE_APPT } from "../../utils/mutations";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { useParams } from "react-router-dom";

// export default function RescheduleAppt() {
//   const navigate = useNavigate();
//   const [selected, setSelected] = useState(-1);
//   const [chosenTimeSlot, setChosenTimeSlot] = useState(null);
//   const [updateAppointment, { error }] = useMutation(RESCHEDULE_APPT);
//   const { patientId } = useParams();
//   console.log("patient? ", patientId);

//   const [confirmationInput, setConfirmationInput] = useState(
//     { referencenumber: '' }
// );
// const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     console.log("Did the state update?", confirmationInput)
//     setConfirmationInput({ ...confirmationInput, [name]: value});
//     console.log(confirmationInput);
// }

//   // Generate time slots for a given day
//   const generateTimeSlots = (date) => {
//     const timeSlots = [];
//     const startHour = 9; // 9 AM
//     const endHour = 17; // 5 PM
//     const currentDate = new Date(date);
//     currentDate.setHours(startHour, 0, 0, 0); // Set starting time
//     while (currentDate.getHours() < endHour) {
//       timeSlots.push(new Date(currentDate));
//       currentDate.setHours(currentDate.getHours() + 1);
//     }
//     return timeSlots;
//   };

//   const date = new Date(); // Set the desired date, might not be used in our application

//   const handleBtnSelection = (btnIndex, item) => {
//     setSelected(btnIndex);
//     setChosenTimeSlot(item.toLocaleTimeString());
//   };

//   const handleSaveBtn = async () => {
//     try {
//       const { data } = await updateAppointment({
//         variables: {
//           input: {
//             appt_date: chosenTimeSlot,
//             appt_time: chosenTimeSlot,
//           },
//         },
//       });
//       console.log("what is tis in datetime", data);
//     //   navigate(`/confirmation/${patientId}`);
//     } catch (err) {
//       console.error("======Error", err);
//       return;
//     }
//   };

//     return (
//         <div>
//         <Navbar/>
//          <input type="text" className="form-control"
//             name="referencenumber"
//             value={confirmationInput.referencenumber}
//             onChange={handleInputChange} /> 
//       <Container>
//         <h5>Please chose a time for your appointment.</h5>
//         <Row>
//           {generateTimeSlots(date).map((item, index) => (
//             <Col className="d-grid gap-2 mx-auto" sm={3} key={index}>
//               {index === selected ? (
//                 <Button
//                   type="button"
//                   className="btn btn-success my-3 p-2"
//                   onClick={() => handleBtnSelection(index, item)}
//                 >
//                   {/* {item.toLocaleTimeString()}{" "} */}
//                 </Button>
//               ) : (
//                 <Button
//                   type="button"
//                   className="btn btn-primary my-3 p-2"
//                   onClick={() => handleBtnSelection(index, item)}
//                 >
//                   {item.toLocaleTimeString()}{" "}
//                 </Button>
//               )}
//             </Col>
//           ))}
//           <Col>
//             <Button
//               type="button"
//               className="btn btn-success my-4 p-2"
//               onClick={handleSaveBtn}
//             >
//               Save Appointment
//             </Button>
//           </Col>
//         </Row>
//       </Container>
//       <Footer/>
//       </div>
//     );
// };
//  --------
    
// const [selected, setSelected] = useState(-1);
// const [chosenTimeSlot, setChosenTimeSlot] = useState(null);
// // const { patientId } = useParams();

// const generateTimeSlots = (date) => {
//     const timeSlots = [];
//     const startHour = 9; // 9 AM
//     const endHour = 17; // 5 PM
//     const currentDate = new Date(date);
//     currentDate.setHours(startHour, 0, 0, 0); // Set starting time
//     while (currentDate.getHours() < endHour) {
//       timeSlots.push(new Date(currentDate));
//       currentDate.setHours(currentDate.getHours() + 1);
//     }
//     return timeSlots;
//   };

//   const date = new Date(); // Set the desired date, might not be used in our application

//   const handleBtnSelection = (btnIndex, item) => {
//     setSelected(btnIndex);
//     setChosenTimeSlot(item.toLocaleTimeString());
//     console.log(chosenTimeSlot)
//   };

// const navigate = useNavigate();
// const [formStateinput, setFormStateinput] = useState({
// appointmentId:''  });
// const [formStatetime, setFormStatetime] = useState({
// appt_time:"",
// appt_date:"",
// });
// const [updateAppointment, { error }] = useMutation(RESCHEDULE_APPT);

// const handleInputChange = (event) => {
// const { name, value } = event.target;
// console.log(name);
// console.log(value);
// setFormStateinput({ ...formStateinput, [name]: value });
// console.log(formStateinput);
// };

// const handleSaveBtn = async (event) => {
// event.preventDefault();
// try {
//   const { data } = await updateAppointment({
//     variables: { input: {
//          appt_time:chosenTimeSlot,
//         appt_date: chosenTimeSlot,
// } },
//   });
//   console.log("info please", data);
// //   navigate(`/bookAppointment/timeSlots/${data.addPatient.id}`);
// } catch (err) {
//   console.error(err);
// }

// setFormStatetime({
//     appt_time:"",
//     appt_date:''
// });
// };