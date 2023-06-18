
// import React from "react";


// const UpdateTime = () =>{

// return(
//     <div>
//       <Navbar/>
//     <Container>
//       <h5>Please chose a time for your appointment.</h5>
//       <Row>
//         {generateTimeSlots(date).map((item, index) => (
//           <Col className="d-grid gap-2 mx-auto" sm={3} key={index}>
//             {index === selected ? (
//               <Button
//                 type="button"
//                 className="btn btn-success my-3 p-2"
//                 onClick={() => handleBtnSelection(index, item)}
//               >
//                 {item.toLocaleTimeString()}{" "}
//               </Button>
//             ) : (
//               <Button
//                 type="button"
//                 className="btn btn-primary my-3 p-2"
//                 onClick={() => handleBtnSelection(index, item)}
//               >
//                 {item.toLocaleTimeString()}{" "}
//               </Button>
//             )}
//           </Col>
//         ))}
//         <Col>
//           <Button
//             type="button"
//             className="btn btn-success my-4 p-2"
//             onClick={handleSaveBtn}
//           >
//             Save Appointment
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//     <Footer/>
//     </div>
// )
//    };

//    export default UpdateTime;
   