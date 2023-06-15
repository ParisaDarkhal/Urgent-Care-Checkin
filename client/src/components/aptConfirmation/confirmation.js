// import React, { useState } from "react";

// import { useQuery } from "@apollo/client";
// import { VIEW_APPOINTMENTS } from "../../utils/queries";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col, Button } from "react-bootstrap";

// const AptConfirmation = () => {
//   const { loading, data } = useQuery(VIEW_APPOINTMENTS);
//   const appointment = data?.appointment || [];
//   console.log(appointment);
//   if (appointment.length === 0) {
//     return <h3> No appointment has been booked</h3>;
//   }

//   return (
//     <section class="section confirmation">
//       <div class="container">
//         <div class="row justify-content-center">
//           <div class="col-lg-8">
//             <div class="confirmation-content text-center">
//               <i class="icofont-check-circled text-lg text-color-2"></i>
//               <h2 class="mt-3 mb-4">Thank you for your appoinment</h2>
//               <p>
//                 {appointment.first_name} {appointment.last_name} is booked
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AptConfirmation;
